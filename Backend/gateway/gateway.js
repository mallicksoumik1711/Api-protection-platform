const apiKeysAuth = require("../middleware/apiKeysAuth");
const anonApiKeyAuth = require("../middleware/anonApiKeysAuth");
const rateLimiter = require("../middleware/rateLimiter");
const authMiddleware = require("../middleware/auth.middleware");
const rules = require("./routeRules.gateway");
const jwt = require("jsonwebtoken");

const runMiddleware = (middleware, req, res) => {
  return new Promise((resolve, reject) => {
    middleware(req, res, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

// this is for test token for api validation
const token = jwt.sign(
  { userId: 1 }, // any payload
  "nzcaar1yq91775922235894", // DB secret
);
console.log("Sample JWT for testing:", token);

const gateway = async (req, res, next) => {
  console.log("GATEWAY HIT:", req.path);
  try {
    const route = `/${req.path.split("/")[1]}`; //get the base route
    const rule = rules[route];

    if (!rule) {
      return next();
    }

    if (rule.apiKey) {
      // await runMiddleware(apiKeysAuth, req, res); //for single route api key auth
      try {
        if (route === "/api") {
          await runMiddleware(apiKeysAuth, req, res);
        } else if (route === "/unprotected-api") {
          await runMiddleware(anonApiKeyAuth, req, res);
        }
      } catch (err) {
        res
          .status(err.status || 500)
          .json({ message: err.message || "Gateway blocked request" });
        return;
      }
    }

    if (rule.rateLimit) {
      await runMiddleware(rateLimiter, req, res);
    }

    if (rule.auth) {
      await runMiddleware(authMiddleware, req, res);
    }

    next();
  } catch (err) {
    res
      .status(err.status || 500)
      .json({ message: err.message || "Gateway blocked request" });
  }
};

module.exports = gateway;
