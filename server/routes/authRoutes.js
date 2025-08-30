import { googleAuth, refreshToken } from "../controllers/authController.js";
import express from "express";
<<<<<<< HEAD
const router = express.Router();

router.post("/google", googleAuth);

router.post("/google/refresh", refreshToken);
=======
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const NOTION_CLIENT_ID = process.env.NOTION_OAUTH_CLIENT_ID;
const NOTION_CLIENT_SECRET = process.env.NOTION_OAUTH_CLIENT_SECRET;

router.post("/google", googleAuth);
router.post("/google/refresh", refreshToken);
router.get("/notion/callback", async (req, res) => {
  const { code } = req.query;
  // console.log("code", code);

  // async function exchangeCodeForToken(code) {
  const response = await fetch("https://api.notion.com/v1/oauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Basic " +
        Buffer.from(`${NOTION_CLIENT_ID}:${NOTION_CLIENT_SECRET}`).toString(
          "base64"
        ),
    },
    body: JSON.stringify({
      grant_type: "authorization_code",
      code: code,
      redirect_uri:
        "https://burns-llc-pas-lightbox.trycloudflare.com/auth/notion/callback",
    }),
  });

  await response.json();
  console.log(data);

  res.send("notion callback");
});
>>>>>>> a405863a198bf03e6ac0e980e1d63044021e93e8

export default router;
