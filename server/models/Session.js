const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({

    sessionName: {
        type: String,
        required: true
    },

    courseName: {
        type: String,
        required: true
    },

    trainer: {
        type: String,
        required: true
    },

    startDate: {
        type: Date,
        required: true
    },

    endDate: {
        type: Date,
        required: true
    },

    timing: {
        type: String,
        required: true
    },

    seats: {
        type: Number,
        required: true
    }

}, {

    timestamps: true

});

module.exports = mongoose.model("Session", sessionSchema);