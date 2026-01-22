const crypto = require("crypto");
const anonApiKeyModel = require("../models/anon_apikey.model");

const generateAnonApiKey = async (req, res) => {
  try{
    const MAX_KEY_PER_IP = 2;
    const EXPIRY_HOURS = 6;

    const expiresAt = new Date(Date.now() + EXPIRY_HOURS * 60 * 60 * 1000);
    const totalKeys = await anonApiKeyModel.countDocuments({
      ip: req.ip,
      isActive: true
    });

    if(totalKeys >= MAX_KEY_PER_IP){
      return res.status(400).json({message: "No more api keys allowed"});
    }

    const ip = req.ip;
    const key = crypto.randomBytes(32).toString("hex");

    const anonApiKey = await anonApiKeyModel.create({
      key, 
      ownerType: "Anonymous",
      ip,
      isActive: true,
      expiresAt
    });

    res.status(201).json({
      message: "Anonymous API Key generated successfully",
      apiKey: anonApiKey.key
    });
  }
  catch(err){
    res.status(500).json({message: "Internal server error", error: err.message});
  }
}

const getAnonApiKeys = async (req, res) => {
    try{
        const allkeys = await anonApiKeyModel.find({ ip: req.ip });
        const activeKeys = allkeys.filter((key) => key.isActive);
        const inactiveKeys = allkeys.filter((key) => !key.isActive);
        res.status(200).json({
            "Total keys": allkeys.length,
            "Active keys": activeKeys.length,
            "Inactive keys": inactiveKeys.length
        });
    }
    catch(err){
        res.status(500).json({message: "Internal server error", error: err.message});
    }
}

module.exports = { generateAnonApiKey, getAnonApiKeys };