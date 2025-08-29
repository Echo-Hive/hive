import dotenv from "dotenv";
import app from "./app.js";

dotenv.config({ path: "./.env" });

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  if ((process.env.NODE_ENV = "development")) {
    console.log(`server is running on port ${PORT} ...`);
    console.log(`http://localhost:${PORT}`);
  } else {
    console.log(`https://hive-19cc.onrender.com`);
  }
});
