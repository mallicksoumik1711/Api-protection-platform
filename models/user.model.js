const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Inactive"
    },
    lastLogin: {
        type: Date
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);