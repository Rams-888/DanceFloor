const express = require("express");
const router = express.Router();
const Session = require("../models/Session");

// Add Session
router.post("/", async (req, res) => {

    try {

        const session = new Session(req.body);

        await session.save();

        res.status(201).json({
            message: "Session Added Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }

});

// Get All Sessions
router.get("/", async (req, res) => {

    try {

        const sessions = await Session.find().sort({ createdAt: -1 });

        res.json(sessions);

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }

});

// Delete Session
router.delete("/:id", async (req, res) => {

    try {

        await Session.findByIdAndDelete(req.params.id);

        res.json({
            message: "Session Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: "Server Error"
        });

    }

});

module.exports = router;