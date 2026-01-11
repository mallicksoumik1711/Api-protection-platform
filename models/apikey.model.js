const mongoose = require("mongoose");

const apiKeysSchema = new mongoose.Schema({
    key: String,
    isActive: Boolean,
    ownerType: String, //User
    ownerId: mongoose.Schema.Types.ObjectId,
    ip: String,
    createdAt: 
    {
        type: Date,
        default: Date.now
    },
    expiresAt: Date
})

module.exports = mongoose.model("ApiKey", apiKeysSchema);