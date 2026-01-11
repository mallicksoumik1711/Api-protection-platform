const anon_apiKeyModel = require("../models/anon_apikey.model");

const validateAnonResponse = async (req, res, next) => {
    try{
        const anonApiKey = req.headers["x-api-key"];
        if(!anonApiKey){
            return res.status(401).json({message: "API key is missing, anonymous API key required"});
        }

        const key = await anon_apiKeyModel.findOne({key: anonApiKey, isActive: true});
        if(!key){
            return res.status(403).json({message: "Invalid or inactive anonymous API key"});
        }

        if(key.expiresAt && key.expiresAt < new Date()){
            return res.status(403).json({message: "Anonymous API key has expired"});
        }

        req.anonApiKey = key;
        next();
    }
    catch(err){
        return res.status(500).json({message: "Internal server error", error: err.message});
    }   
}

module.exports = validateAnonResponse;