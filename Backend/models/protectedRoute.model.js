const mongoose = require("mongoose");

const protectedRouteSchema = new mongoose.Schema(
  {
    projectId: {
      type: String,
      ref: "Project",
      required: true,
    },
    route: {
      base: {
        type: String,
        required: true,
        trim: true,
      },
      sub: {
        type: String,
        trim: true,
      },
      child: {
        type: String,
        trim: true,
      },
      protectNestedRoute: {
        type: Boolean,
        default: false,
      },
    },
    request: {
      method: {
        type: String,
        enum: ["GET", "POST", "PUT", "DELETE", "PATCH", "ALL"],
        default: "ALL",
      },
      priority: {
        type: String,
        enum: ["Low", "Normal", "High"],
        default: "Normal",
      },
    },
    protection: {
      rules: {
        type: String,
        enum: ["API_KEY", "JWT", "API_KEY_JWT", "PUBLIC_RATE_LIMITED"],
        required: true,
      },
    },
    security: {
      rateLimiting: {
        enabled: {
          type: Boolean,
          default: true,
        },
      },
      botProtection: {
        enabled: {
          type: Boolean,
          default: false,
        },
      },
      protectionEnabled: {
        type: Boolean,
        default: true,
      },
    },
    description: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("ProtectedRoute", protectedRouteSchema);
