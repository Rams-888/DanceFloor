const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(

    {

        name: {

            type: String,
            required: true

        },

        email: {

            type: String,
            required: true,
            unique: true

        },

        mobile: {

            type: String,
            required: true

        },
        course: {
    type: String,
    default: ""
},

batch: {
    type: String,
    default: ""
},

instructor: {
    type: String,
    default: ""
},

        password: {

            type: String,
            required: true

        },

        role: {

            type: String,
            enum: ["student", "admin"],
            default: "student"

        },

        // Student Details

        course: {

            type: String,
            default: ""

        },

        batch: {

            type: String,
            default: ""

        },

        instructor: {

            type: String,
            default: ""

        },

        profileImage: {

            type: String,
            default: ""

        }

    },

    {

        timestamps: true

    }

);

module.exports = mongoose.model("User", userSchema);