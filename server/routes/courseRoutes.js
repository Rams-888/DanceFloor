const express = require("express");
const router = express.Router();
const Course = require("../models/Course");

// Add Course
router.post("/", async (req, res) => {
    try {

        const course = new Course(req.body);
        await course.save();

        res.status(201).json({
            message: "Course Added Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }
});

// Get All Courses
router.get("/", async (req, res) => {

    try {

        const courses = await Course.find().sort({ createdAt: -1 });

        res.json(courses);

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }

});

// Delete Course
router.delete("/:id", async (req, res) => {

    try {

        await Course.findByIdAndDelete(req.params.id);

        res.json({
            message: "Course Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }

});

module.exports = router;