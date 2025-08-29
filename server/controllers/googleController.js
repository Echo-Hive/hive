import { google } from "googleapis";

// Step 1: Redirect user to Google OAuth
const login = (req, res) => {
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
  const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI;

  if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
    return res.status(500).json({ error: "Missing Google OAuth credentials" });
  }

  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/drive.metadata.readonly"],
  });
  res.redirect(authUrl);
};

// Step 2: Handle OAuth2 callback
const oauthCallback = async (req, res) => {
  try {
    const code = req.query.code;
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);

    // TODO: Save tokens to DB per user
    console.log("Tokens:", tokens);

    res.send("✅ Login successful! Now visit /files to see your Drive files.");
  } catch (err) {
    console.error(err);
    res.status(500).send("OAuth2 callback failed");
  }
};

// Step 3: List Drive files
const listFiles = async (req, res) => {
  try {
    const drive = google.drive({ version: "v3", auth: oAuth2Client });
    const result = await drive.files.list({
      pageSize: 10,
      fields: "files(id, name)",
    });

    res.json(result.data.files);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching files");
  }
};

export default { login, oauthCallback, listFiles };
