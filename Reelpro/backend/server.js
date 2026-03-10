require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const storyRoutes = require("./routes/storyRoutes");
const messageRoutes = require("./routes/messageRoutes");

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json());

/* Serve uploaded files */
app.use("/uploads", express.static("uploads"));

/* Routes */
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/stories", storyRoutes);
app.use("/api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("ReelPro API running");
});

const PORT = process.env.PORT || 5000;

/* Start server AFTER database connects */
connectDB().then(() => {

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

}).catch((err) => {
  console.error("Database connection failed:", err);
});