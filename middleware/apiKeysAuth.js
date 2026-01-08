const apiKeyModel = require("../models/apikey.model");

const validateResponse = async (req, res, next) => {
  try {
    const apiKey = req.headers["x-api-key"];
    if (!apiKey) {
      return res.status(401).json({ message: "API key is missing" });
    }

    const key = await apiKeyModel.findOne({ key: apiKey, isActive: true });
    if (!key) {
      return res.status(403).json({ message: "Invalid or inactive API key" });
    }

    if (key.expiresAt && key.expiresAt < new Date()) {
      return res.status(403).json({ message: "API key has expired" });
    }

    req.apiKey = key;
    next();
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

module.exports = validateResponse;
