const mongoose = require("mongoose");

const apiKeysSchema = new mongoose.Schema({
    key: String,
    isActive: Boolean,
    ownerType: String, //User
    ownerId: mongoose.Schema.Types.ObjectId,
    ip: String,
    name: String,
    lastUsed: Date,
    usage: {
        used: Number,
        limit: {
            type: Number,
            default: 100
        }
    },
    createdAt: 
    {
        type: Date,
        default: Date.now
    },
    expiresAt: Date
})

module.exports = mongoose.model("ApiKey", apiKeysSchema);