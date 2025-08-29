import express from "express";
const app = express();
import googleRoutes from "./routes/googleRoutes.js";

app.use(express.json());

app.use("/", googleRoutes);

app.all("*all", (req, res) => {
  res.status(404).send("not found");
});

export default app;
