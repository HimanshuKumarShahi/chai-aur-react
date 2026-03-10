const Story = require("../models/story");

exports.createStory = async (req, res) => {

  try {

    const story = await Story.create({
      user: req.user.id,
      mediaUrl: req.file ? req.file.path : ""
    });

    res.json(story);

  } catch (error) {
    res.status(500).json(error);
  }

};