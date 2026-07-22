const express = require("express");
const User = require("../models/User");
const Admin = require("../models/Admin");

const router = express.Router();


// ===========================
// Student Signup
// ===========================

router.post("/signup", async (req, res) => {

    try {

        const { name, email, mobile, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {

            return res.status(400).json({
                message: "User already exists"
            });

        }

        const user = new User({

            name,
            email,
            mobile,
            password,
            role: "student"

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


// ===========================
// Login
// ===========================

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        // Check Admin

        const admin = await Admin.findOne({ email });

        if (admin) {

            if (admin.password !== password) {

                return res.status(400).json({

                    message: "Invalid Password"

                });

            }

            return res.status(200).json({

                message: "Login Successful",
                role: "admin",
                user: admin

            });

        }

        // Check Student

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(400).json({

                message: "Invalid Email"

            });

        }

        if (user.password !== password) {

            return res.status(400).json({

                message: "Invalid Password"

            });

        }

        return res.status(200).json({

            message: "Login Successful",
            role: "student",
            user

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

});


// ===========================
// Get All Students
// ===========================

router.get("/", async (req, res) => {

    try {

        const users = await User.find();

        res.status(200).json(users);

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

});


// ===========================
// Get Student By ID
// ===========================

router.get("/:id", async (req, res) => {

    try {

        const user = await User.findById(req.params.id);

        if (!user) {

            return res.status(404).json({

                message: "Student Not Found"

            });

        }

        res.status(200).json(user);

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

});


// ===========================
// Update Student
// ===========================

router.put("/:id", async (req, res) => {

    try {

        const updatedUser = await User.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );

        if (!updatedUser) {

            return res.status(404).json({

                message: "Student Not Found"

            });

        }

        res.status(200).json({

            message: "Student Updated Successfully",
            user: updatedUser

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

});


// ===========================
// Delete Student
// ===========================

router.delete("/:id", async (req, res) => {

    try {

        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {

            return res.status(404).json({

                message: "Student Not Found"

            });

        }

        res.status(200).json({

            message: "Student Deleted Successfully"

        });

    }

    catch (error) {

        console.error(error);

        res.status(500).json({

            message: "Server Error"

        });

    }

});


module.exports = router;