import dotenv from "dotenv";
import express from "express";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  if ((process.env.NODE_ENV = "development")) {
    console.log(`server is running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
  } else {
    console.log(`https://hive-19cc.onrender.com`);
  }
});

app.get("/", (req, res) => {
  console.log("hello world");
  res.send("hello world");
});

app.all("*all", (req, res) => {
  res.status(404).send("not found");
});
