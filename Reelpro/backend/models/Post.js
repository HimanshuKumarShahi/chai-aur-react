const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  caption: String,

  mediaUrl: String,

  mediaType: {
    type: String,
    enum: ["image", "video", "reel"]
  },

  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],

  comments: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    text: String
  }]

}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);