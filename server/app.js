import dotenv from "dotenv";
import express from "express";
const app = express();

dotenv.config();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("server is running on port 8080");
  console.log("http://localhost:8080");
});

app.get("/", (req, res) => {
  res.send("hello world");
});
app.all("*all", (req, res) => {
  res.status(404).send("not found");
});
