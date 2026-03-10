const Message = require("../models/Message");

exports.sendMessage = async (req, res) => {

  try {

    const msg = await Message.create({
      sender: req.user.id,
      receiver: req.body.receiver,
      text: req.body.text
    });

    res.json(msg);

  } catch (error) {
    res.status(500).json(error);
  }

};

exports.getMessages = async (req, res) => {

  try {

    const messages = await Message.find({
      $or: [
        { sender: req.user.id, receiver: req.params.id },
        { sender: req.params.id, receiver: req.user.id }
      ]
    });

    res.json(messages);

  } catch (error) {
    res.status(500).json(error);
  }

};