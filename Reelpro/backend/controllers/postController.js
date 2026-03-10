// backend/controllers/postController.js
const Post = require("../models/Post");
const cloudinary = require("../config/cloudinary");

exports.createPost = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    const post = await Post.create({
      user: req.user.id,
      caption: req.body.caption,
      mediaUrl: result.secure_url,
      mediaType: req.body.type,
    });

    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Post creation failed" });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate("user", "username avatar")
      .sort({ createdAt: -1 });

    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Cannot fetch posts" });
  }
};

exports.likePost = async (req, res) => {
  // your like post logic
};

exports.addComment = async (req, res) => {
  // your add comment logic
};