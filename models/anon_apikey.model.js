const mongoose = require("mongoose");
const anon_apikeySchema = new mongoose.Schema({
  key: String,
  isActive: Boolean,
  ownerType: String, //Anonymous
  ip: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  expiresAt: Date,
});

module.exports = mongoose.model("Anon_ApiKey", anon_apikeySchema);