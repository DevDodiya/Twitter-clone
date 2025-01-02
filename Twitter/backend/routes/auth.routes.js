import express from "express";
import { signup, login, logout, getMe } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

// Auth Routes

// Get User
router.get("/me",protectRoute, getMe);
// Sign-Up
router.post("/signup", signup);
// Login
router.post("/login", login);
// Logout
router.post("/logout", logout);

export default router;