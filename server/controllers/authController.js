import axios from "axios";
import dotenv from "dotenv";
import User from "../models/User.js";

dotenv.config();
const GOOGLE_CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
const REDIRECT_URI = "http://localhost:5173";
// console.log(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);

export const googleAuth = async (req, res) => {
  try {
    const { code } = req.body;

    const tokenResponse = await axios.post(
      "https://oauth2.googleapis.com/token",
      {
        code,
        client_id: GOOGLE_CLIENT_ID,
        client_secret: GOOGLE_CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        grant_type: "authorization_code",
      }
    );

    const { access_token, refresh_token, expires_in } = tokenResponse.data;

    console.log(refresh_token);

    const userInfoResponse = await axios.get(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const { email, name: username, picture } = userInfoResponse.data;

    const user = {
      email,
      username,
      password: "beehive",
      picture,
      googleRefreshToken: refresh_token,
    };

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      existingUser.googleRefreshToken = refresh_token;
      await existingUser.save();
    } else {
      const newUser = new User(user);
      await newUser.save();
    }

    res.json({
      access_token,
      refresh_token,
      expires_in, // seconds
    });
  } catch (err) {
    console.error(err.response?.data || err.message);
    res.status(500).json({ error: "Failed to authenticate" });
  }
};

export const refreshToken = async (req, res) => {
  try {
    const { refresh_token } = req.body;

    if (!refresh_token) {
      return res.status(400).json({ error: "Missing refresh token" });
    }

    const response = await axios.post("https://oauth2.googleapis.com/token", {
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      refresh_token,
      grant_type: "refresh_token",
    });
    const { access_token: accessToken } = response.data;
    const docs = await axios.get("https://www.googleapis.com/drive/v3/files", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: "mimeType='application/vnd.google-apps.document'",
        fields: "files(id, name, createdTime, modifiedTime, webViewLink)",
      },
    });

    res.json({ files: docs.data.files });
  } catch (err) {
    res.status(500).json({ error: "Failed to refresh token" });
  }
};
