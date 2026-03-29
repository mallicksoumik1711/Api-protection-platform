const mongoose = require("mongoose");

const jwtSettingsSchema = new mongoose.Schema({
  projectId: {
    type: String,
    ref: "Project",
    required: true,
  },
  enabled: {
    type: Boolean,
    default: false,
  },
  secretKey: String,
  algorithm: String,
  expiresIn: {
    type: String,
    default: "1h",
  },
  tokenType: {
    type: String,
    enum: ["header", "cookie"],
    default: "cookie",
  },
  tokenName: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("JwtSettings", jwtSettingsSchema);
