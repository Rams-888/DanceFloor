const express = require("express");
const router = express.Router();
const Admin = require("../models/Admin");
const User = require("../models/User");
const Application = require("../models/Application");
const Enquiry = require("../models/Enquiry");
const Course = require("../models/Course");
const Session = require("../models/Session");

// Admin Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email",
      });
    }

    if (admin.password !== password) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    res.status(200).json({
      success: true,
      message: "Login Successful",
      admin,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});


// Dashboard Statistics
router.get("/stats", async (req, res) => {

    try {

        const students = await User.countDocuments();
        const applications = await Application.countDocuments();
        const enquiries = await Enquiry.countDocuments();
        const courses = await Course.countDocuments();
        const sessions = await Session.countDocuments();

        res.json({

            students,
            applications,
            enquiries,
            courses,
            sessions

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Server Error"

        });

    }

});

module.exports = router;