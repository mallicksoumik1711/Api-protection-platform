const rateLimitModel = require("../models/rateLimit.model");

const {getRequestCount, incrementRequestCount} = require("./projectRedis.service");

const projectRateLimit = async (req, res, next) => {
    try{
        const projectId = req.headers["x-project-id"] || "project123"; //only for testing. remove in production
        if(!projectId){
            return res.status(400).json({message: "Project ID is required in x-project-id header"});
        }

        const settings = await rateLimitModel.findOne({projectId});
        if(!settings){
            return next();
        }

        const {limit, windowTime} = settings;

        const identity = req.apiKey?.key ? `apikey:${req.apiKey.key}` : `ip:${req.ip}`;

        const redisKey = `project-rate-limit:${projectId}:${identity}`;

        const currCount = await getRequestCount(redisKey);

        if(currCount >= limit){
            return res.status(429).json({message: `Project rate limit exceeded. Try again after ${windowTime} seconds.`});
        }

        await incrementRequestCount(redisKey, windowTime);

        next();
    } catch(error){
        console.log("Project rate limit error: ", error.message);
        next();
    }
};

module.exports = projectRateLimit;