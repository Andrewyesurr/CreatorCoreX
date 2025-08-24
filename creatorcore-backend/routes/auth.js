// routes/auth.js
import express from "express";
import { signup, login, getProfile } from "../controllers/authController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Email/Password
router.post("/signup", signup);
router.post("/login", login);

// Authenticated "who am I"
router.get("/me", verifyToken, getProfile);

export default router;
