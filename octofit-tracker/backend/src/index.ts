import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/octofit-tracker";

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "OctoFit Tracker backend is running." });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Backend running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });
