import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import multer from "multer";
import { solveMath } from "./ai.js";


const app = express();
app.use(cors());

const upload = multer({ dest: "uploads/" });

app.get("/", (req, res) => {
  res.send("API Running...");
});

// MAIN ROUTE
app.post("/solve", upload.single("image"), async (req, res) => {
  try {
    const result = await solveMath(req.file.path);
    res.json({ solution: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error solving problem" });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});