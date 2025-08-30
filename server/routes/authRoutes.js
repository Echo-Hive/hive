import { googleAuth, refreshToken } from "../controllers/authController.js";
import express from "express";
const router = express.Router();

router.post("/google", googleAuth);

router.post("/google/refresh", refreshToken);

export default router;
