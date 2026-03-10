// backend/routes/postRoutes.js
const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

const {
  createPost,
  getPosts,
  likePost,
  addComment,
} = require("../controllers/postController");

// must be functions, not undefined
router.post("/create", auth, upload.single("media"), createPost);
router.get("/", auth, getPosts); // ✅ this caused your crash before
router.post("/like/:id", auth, likePost);
router.post("/comment/:id", auth, addComment);

module.exports = router;