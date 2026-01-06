const apiKeysAuth = require("../middleware/apiKeysAuth");
const rateLimiter = require("../middleware/rateLimiter");
const authMiddleware = require("../middleware/auth.middleware");
const rules = require("./routeRules.gateway");

const runMiddleware = (middleware, req, res) => {
    return new Promise((resolve, reject) => {
        middleware(req, res, (err) => {
            if (err) reject (err);
            else resolve();
        })
    })
}

const gateway = async (req, res, next) => {
    console.log("GATEWAY HIT:", req.path);
    try{
        const route = `/${req.path.split("/")[1]}`; //get the base route
        const rule = rules[route];

        if(!rule){
            return next();
        }

        if(rule.apiKey){
            await runMiddleware(apiKeysAuth, req, res);
        }

        if(rule.rateLimit){
            await runMiddleware(rateLimiter, req, res);
        }

        if(rule.auth){
            await runMiddleware(authMiddleware, req, res);
        }

        next();
    }
    catch(err){
        res.status(err.status || 500).json({message: err.message || "Gateway blocked request"});
    }
}

module.exports = gateway;