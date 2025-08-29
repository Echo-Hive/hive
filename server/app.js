import express from "express";
const app = express();

app.listen(8080, () => {
  console.log("server is running on port 8080");
  console.log("http://localhost:8080");
});

app.get("/", (req, res) => {
  res.send("hello world");
});
app.all("*all", (req, res) => {
  res.status(404).send("not found");
});
