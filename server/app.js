import express from "express";
const app = express();

app.get("/", (req, res) => {
  console.log("hello world");
  res.send("hello world");
});

app.all("*all", (req, res) => {
  res.status(404).send("not found");
});

app.use(express.json());
app.use();

export default app;
