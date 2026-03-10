const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  mediaUrl: String,

  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400
  }

});

module.exports = mongoose.model("Story", storySchema);