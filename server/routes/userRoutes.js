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

            password

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

module.exports = router;