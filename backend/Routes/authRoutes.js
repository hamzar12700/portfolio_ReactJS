// routes/auth.routes.js
import { Router } from "express";
import { signup, verifyOtp, login, refreshToken } from "../controller/authController.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = Router();

router.post("/signup", signup);
router.post("/verify-otp", verifyOtp);
router.post("/login", login);
router.post("/refresh-token", refreshToken);

router.get("/profile", authMiddleware, async (req, res) => {
  res.json({
    message: "Protected Profile Route",
    userId: req.user.userId
  });
});

export default router;
