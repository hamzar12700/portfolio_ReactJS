import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./Routes/authRoutes.js";
import cors from "cors"

dotenv.config();

const app = express();
connectDB();
app.use(cors())

// Middleware
app.use(cookieParser());
app.use(express.json()); 

// Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
