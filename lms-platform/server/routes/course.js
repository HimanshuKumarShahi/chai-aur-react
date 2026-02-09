import express from "express";
import { Course } from "../models/Course.js";
import { protect } from "../middleware/authMiddleware.js"; 

const router = express.Router();


router.get("/", async (req, res) => {
  try {
    const courses = await Course.find({}).populate("instructor", "name");
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

// Create Course (Only logged in users)
router.post("/", protect, async (req, res) => {
  const { title, description, price, thumbnail } = req.body;

  try {
    const course = new Course({
      title,
      description,
      price,
      thumbnail,
      instructor: req.user._id,
    });

    const createdCourse = await course.save();
    res.status(201).json(createdCourse);
  } catch (error) {
    res.status(500).json({ message: "Failed to create course" });
  }
});

export default router;