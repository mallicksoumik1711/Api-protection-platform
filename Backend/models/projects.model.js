const mongoose = require("mongoose");
const projectSchema = new mongoose.Schema({
    name: String,
    description: String,
    baseUrl: String,
    framework: {
        type: String,
        enum: ["Node / Express", "FastAPI", "Django", "Spring Boot", "Other"],
        default: "Node / Express"
    },
    environment: {
        type: String,
        enum: ["Development", "Production"],
        default: "Development"
    },
    ownerType: {
        type: String,
        default: "User"
    },
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    projectId: {
        type: String,
        unique: true,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

    updatedAt: Date
});

module.exports = mongoose.model("Project", projectSchema);