const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    },
    lastLogin: {
        type: Date
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);