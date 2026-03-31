const redisClient = require("../config/redis");

const getRequestCount = async (key) => {
    const value = await redisClient.get(key);
    return value? parseInt(value) : 0;
};

const incrementRequestCount = async (key, windowTime) => {
    const current = await redisClient.get(key);

    if(current){
        await redisClient.incr(key);
    }
    else{
        await redisClient.set(key, 1, {EX: windowTime});
    }
};

// reset limit feature later - resetRateLimit(key) 

module.exports = {
    getRequestCount,
    incrementRequestCount,
};