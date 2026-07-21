const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

// Add Application
router.post("/", async (req, res) => {

    try {

        const application = new Application(req.body);

        await application.save();

        res.status(201).json({
            success: true,
            message: "Application Submitted Successfully"
        });

    }
    catch (error) {

        res.status(500).json({
            success: false,
            message: "Server Error"
        });

    }

});

// Get All Applications
router.get("/", async (req, res) => {

    try {

        const applications = await Application.find().sort({ createdAt: -1 });

        res.status(200).json(applications);

    }

    catch (error) {

        res.status(500).json({

            message: "Server Error"

        });

    }

});

// Delete Application
router.delete("/:id", async (req, res) => {

    try {

        await Application.findByIdAndDelete(req.params.id);

        res.status(200).json({

            message: "Application Deleted Successfully"

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Server Error"

        });

    }

});
// Update Application Status
router.put("/:id", async (req, res) => {

    try {

        const updatedApplication = await Application.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true
            }

        );

        res.status(200).json({

            message: "Application Updated Successfully",

            application: updatedApplication

        });

    }

    catch (error) {

        res.status(500).json({

            message: "Server Error"

        });

    }

});

module.exports = router;