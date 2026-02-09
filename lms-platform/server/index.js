import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import {connectDB} from "./config/db.js";

dotenv.config();

connectDB();

const app=express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/courses", courseRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});