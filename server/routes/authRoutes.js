import express from "express";
import authController from "../controllers/authController.js";

const router = express.Router();

// Example route for user login
router.post("/oauth/login", authController.oauthLogin);

export default router;
