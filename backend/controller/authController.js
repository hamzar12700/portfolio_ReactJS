import User from "../models/users.js";
import { hash, compare } from "bcryptjs";
import pkg from "jsonwebtoken"; 
const { sign, verify } = pkg;
import generateOTP from "../config/otpGenerate.js";
import sendEmail from "../config/sendEmail.js";


const createTokens = (userId) => {
  const accessToken = sign({ userId }, process.env.JWT_ACCESS_SECRET, { expiresIn: "15m" });
  const refreshToken = sign({ userId }, process.env.JWT_REFRESH_SECRET, { expiresIn: "7d" });
  return { accessToken, refreshToken };
};

// SIGNUP
export async function signup(req, res) {
  const { name, email, password } = req.body;
  const hashedPassword = await hash(password, 10);
  const otp = generateOTP();

  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    otp,
    otpExpiry: Date.now() + 10 * 60 * 1000
  });

  await sendEmail(email, otp);

  res.json({ message: "OTP sent to email" });
}

// VERIFY OTP
export async function verifyOtp(req, res) {
  const { email, otp } = req.body;
  const user = await User.findOne({ email });

  if (!user || user.otp !== otp || user.otpExpiry < Date.now()) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  user.isVerified = true;
  user.otp = null;
  await user.save();

  res.json({ message: "Email verified successfully" });
}

// LOGIN
export async function login(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !user.isVerified) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch = await compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const { accessToken, refreshToken } = createTokens(user._id);

  user.refreshToken = refreshToken;
  await user.save();

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false, // true in production
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000
  });

  res.json({ accessToken });
}

// REFRESH TOKEN
export async function refreshToken(req, res) {
  try {
    const token = req.cookies.refreshToken;
    if (!token) return res.status(401).json({ message: "No refresh token" });

    const payload = verify(token, process.env.JWT_REFRESH_SECRET);
    const user = await User.findById(payload.userId);

    if (!user || user.refreshToken !== token) {
      return res.status(403).json({ message: "Forbidden" });
    }

    const tokens = createTokens(user._id);
    user.refreshToken = tokens.refreshToken;
    await user.save();

    res.cookie("refreshToken", tokens.refreshToken, {
      httpOnly: true,
      secure: false, // true in production
      sameSite: "strict",
    });

    res.json({ accessToken: tokens.accessToken });
  } catch (err) {
    res.status(403).json({ message: "Invalid refresh token" });
  }
}
