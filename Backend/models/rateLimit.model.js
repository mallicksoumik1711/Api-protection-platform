const mongoose = require("mongoose");

const rateLimitSchema = new mongoose.Schema(
  {
    projectId: {
      type: String,
      ref: "Project",
      required: true,
      unique: true,
    },
    limit: {
      type: Number,
      required: true,
      default: 50,
    },
    windowTime: {
      type: Number,
      required: true,
      default: 60, // in seconds
    },
    type: {
      type: String,
      enum: ["fixed", "sliding", "leaky"],
      default: "sliding",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("RateLimit", rateLimitSchema);
