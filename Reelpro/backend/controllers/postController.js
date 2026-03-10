const Post = require("../models/Post");

exports.getPosts = async (req, res) => {

  try {

    const posts = await Post.find()
      .populate("user", "username avatar")
      .sort({ createdAt: -1 });

    res.json(posts);

  } catch (error) {
    res.status(500).json(error);
  }

};