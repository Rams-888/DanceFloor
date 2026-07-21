const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
{
    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    danceStyle: {
        type: String,
        required: true
    },

    batch: {
        type: String,
        required: true
    },

    experience: {
        type: String,
        required: true
    },

    address: {
    type: String,
    required: true
},

status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending"
}

},
{
    timestamps:true
});

module.exports = mongoose.model("Application", applicationSchema);