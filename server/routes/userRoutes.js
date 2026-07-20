const express = require("express");
const User = require("../models/User");

const router = express.Router();

// Signup Route

router.post("/signup", async (req, res) => {

    try {

        const { name, email, mobile, password } = req.body;

        // Check if user already exists

        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({

                message: "User already exists"

            });

        }

        // Create new user

        const user = new User({

            name,

            email,

            mobile,

            password,

            role: "student" // Set default role to "student"

        });

        await user.save();

        res.status(201).json({

            message: "User Registered Successfully"

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

});
// Login Route
router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        // Find user by email
        const user = await User.findOne({ email });

        if (!user) {

            return res.status(400).json({
                message: "Invalid Email"
            });

        }

        // Check password
        if (user.password !== password) {

            return res.status(400).json({
                message: "Invalid Password"
            });

        }

        // Login Successful
        res.status(200).json({

            message: "Login Successful",

            role: user.role,

            user: {
                name: user.name,
                email: user.email
            }

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Server Error"
        });

    }

});
// Get All Students
router.get("/", async (req, res) => {

    try {

        const users = await User.find();

        res.status(200).json(users);

    }

    catch (error) {

        res.status(500).json({

            message: "Server Error"

        });

    }

});
// Delete Student
router.delete("/:id", async (req, res) => {

    try {

        await User.findByIdAndDelete(req.params.id);

        res.status(200).json({

            message: "Student Deleted Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Server Error"

        });

    }

});
module.exports = router;