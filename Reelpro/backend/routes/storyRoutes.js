const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

const { createStory } = require("../controllers/storyController");

router.post("/create", auth, upload.single("media"), createStory);

module.exports = router;