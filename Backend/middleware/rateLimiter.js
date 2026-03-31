const redisClient = require("../config/redis");
const RATE_LIMIT_WINDOW = 60;
const MAX_REQUESTS = 5;

const rateLimit = async (req, res, next) => {
    try{
        //not ai genersted comment, for my own understanding
        const identity = req.apiKey?.key ? `apikey:${req.apiKey.key}` : `ip:${req.ip}`;
        //ip:::1 where ::1 is the ip address 127.0.0.1
        // console.log(identity);
        const key = `rate-limit:${identity}`;
        // console.log(key);
        let currCount = await redisClient.get(key);
        // console.log(currCount);
        if(currCount && parseInt(currCount) >= MAX_REQUESTS){
            return res.status(429).json({message: `Too many requests. Please try again later after ${RATE_LIMIT_WINDOW} seconds.`});
        }
        if(currCount){
            await redisClient.incr(key);
        }
        else{
            await redisClient.set(key, 1, {EX: RATE_LIMIT_WINDOW});
        }
        next();
    }
    catch (err){
        console.log("rate limit error: ", err.message);
        next();
    }
}

module.exports = rateLimit;