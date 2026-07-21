const express = require("express");
const router = express.Router();

const Course = require("../models/Course");

// Add Course
router.post("/", async (req, res) => {
    try {
        const course = new Course(req.body);
        await course.save();

        res.status(201).json({
            message: "Course added successfully",
            course,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});

// Get All Courses
router.get("/", async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
});
// Delete Course
router.delete("/:id", async (req, res) => {
    try {
        await Course.findByIdAndDelete(req.params.id);

        res.json({
            message: "Course deleted successfully"
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
// Update Course
router.put("/:id", async (req, res) => {
    try {

        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true
            }
        );

        res.json({
            message: "Course updated successfully",
            course: updatedCourse
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
});

module.exports = router;