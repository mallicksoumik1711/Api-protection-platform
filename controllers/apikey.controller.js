const crypto = require("crypto");
const apiKeyModel = require("../models/apikey.model");

const generateApiKey = async (req, res) => {
    try{
        const userId = req.user.id;
        const key = crypto.randomBytes(32).toString('hex');

        const apiKey = await apiKeyModel.create({
            key,
            ownerType: "User",
            ownerId: userId,
            isActive: true,
        })

        res.status(201).json({
            message: "API Key generated successfully",
            apiKey: apiKey.key
        })
    }
    catch(err){
        res.status(500).json({message: "Internal server error", error: err.message});
    }
}

module.exports = generateApiKey;