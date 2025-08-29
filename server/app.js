import express from "express";
import googleRoutes from "./routes/googleRoutes.js";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/auth", googleRoutes);

app.all("*all", (req, res) => {
  res.status(404).send("not found");
});

export default app;
