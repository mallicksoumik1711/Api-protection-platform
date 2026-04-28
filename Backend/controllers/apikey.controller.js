const crypto = require("crypto");
const apiKeyModel = require("../models/apikey.model");

const generateApiKey = async (req, res) => {
  try {
    const MAX_KEY_PER_USER = 5;
    const EXPIRY_DAY = 1;

    const { name } = req.body;
    if (!name || !name.trim()) {
      return res.status(400).json({ message: "Name is required" });
    }

    const expiresAt = new Date(Date.now() + EXPIRY_DAY * 24 * 60 * 60 * 1000);

    const totalKeys = await apiKeyModel.countDocuments({
      ownerId: req.user.id,
      isActive: true,
    });

    if (totalKeys >= MAX_KEY_PER_USER) {
      return res.status(400).json({ message: "No more API keys allowed" });
    }
    const userId = req.user.id;
    const key = crypto.randomBytes(32).toString("hex");

    const apiKey = await apiKeyModel.create({
      key,
      ownerType: "User",
      ownerId: userId,
      isActive: true,
      name,
      expiresAt,
      lastUsed: null,
      usage: {
        used: 0,
        limit: 100,
      },
    });

    res.status(201).json({
      message: "API Key generated successfully",
      apiKey: apiKey.key,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

const getApiKeys = async (req, res) => {
  try {
    const allkeys = await apiKeyModel.find({ ownerId: req.user.id });
    const activeKeys = allkeys.filter((key) => key.isActive);
    const inactiveKeys = allkeys.filter((key) => !key.isActive);
    res.status(200).json({
      "Total keys": allkeys.length,
      "Active keys": activeKeys.length,
      "Inactive keys": inactiveKeys.length,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

const getApiKeysDetails = async (req, res) => {
  try {
    const keys = await apiKeyModel.find({
      ownerId: req.user.id,
    });

    const allKeysDetails = keys.map((key) => ({
      id: key._id,
      name: key.name,
      status: key.isActive ? "active" : "inactive",
      createdAt: key.createdAt,
      lastUsed: key.lastUsed,
      expiresAt: key.expiresAt,
      usage: {
        used: key.usage?.used || 0,
        limit: key.usage?.limit || 100,
      },
    }));
    res.status(200).json(allKeysDetails);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

const getUsageStats = async (req, res) => {
  try {
    const keys = await apiKeyModel.find({
      ownerId: req.user.id,
      isActive: true,
    });

    let totalUsed = 0;
    let totalLimit = 0;

    keys.forEach((key) => {
      totalUsed += key.usage?.used || 0;
      totalLimit += key.usage?.limit || 100;
    });

    res.status(200).json({
      used: totalUsed,
      limit: totalLimit,
      percentageUsed: totalLimit
        ? Math.round((totalUsed / totalLimit) * 100)
        : 0,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
};

module.exports = {
  generateApiKey,
  getApiKeys,
  getApiKeysDetails,
  getUsageStats,
};
