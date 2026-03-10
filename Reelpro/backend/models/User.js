const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  username: String,

  email: {
    type: String,
    unique: true
  },

  password: String,

  avatar: String,

  bio: String,

  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],

  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }],

  resetToken: String,
  resetTokenExpire: Date

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);