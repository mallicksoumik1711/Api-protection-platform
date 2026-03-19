const mongoose = require("mongoose");

const apiLogSchema = new mongoose.Schema({
  method: String,
  path: String,
  query: String,
  status: Number,
  result: String,
  apiKey: String,
  ip: String,
  responseTime: Number,
  requestId: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ApiLog", apiLogSchema);
