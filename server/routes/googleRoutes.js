import express from "express";
import googleController from "../controllers/googleController.js";

const router = express.Router();

// Example route for Google OAuth login
router.get("/login", googleController.login);
router.get("/oauth2callback", googleController.oauthCallback);
router.get("/files", googleController.listFiles);

export default router;
