const jwt = require("jsonwebtoken");
const projectModel = require("../models/projects.model");
const protectedRouteModel = require("../models/protectedRoute.model");
const jwtModel = require("../models/jwtSettings.model");
const rateLimitModel = require("../models/rateLimit.model");
const apiKeyModel = require("../models/apikey.model");

const redisClient = require("../config/redis");

const { getSecurityFlags } = require("../utils/securityFlags");

const validateRequest = async (req, res) => {
  try {
    const { projectId, path, method } = req.body;
    const authHeader = req.headers["authorization"];
    const apiToken = authHeader?.startsWith("Bearer ")
      ? authHeader.split(" ")[1]
      : null;
    const apiKey = req.headers["x-api-key"];

    // input validation
    if (!projectId || !path || !method) {
      return res.json({
        allowed: false,
        message: "Missing required fields",
        step: "INPUT_VALIDATION",
      });
    }

    // project validation
    const project = await projectModel.findOne({ projectId });
    if (!project) {
      return res.json({
        allowed: false,
        message: "Project not found",
        step: "PROJECT_VALIDATION",
      });
    }

    const [routes, jwtSettings, rateLimits] = await Promise.all([
      protectedRouteModel.find({ projectId }),
      jwtModel.findOne({ projectId }),
      rateLimitModel.findOne({ projectId }),
    ]);

    const matchRoute = (routes, requestPath, method) => {
      return routes.find((r) => {
        const { base, sub, child } = r.route;
        let pattern = "^/" + base;
        if (sub) pattern += "/" + sub;
        if (child) {
          pattern += "/" + child.replace(/:\w+/g, "[^/]+");
        }
        if (r.route.protectNestedRoute) {
          pattern += "(/.*)?";
        }
        pattern += "$";
        const regex = new RegExp(pattern);

        const reqMethod = method.toUpperCase();
        return (
          regex.test(requestPath) &&
          (r.request.method === reqMethod || r.request.method === "ALL")
        );
      });
    };

    const matchedRoute = matchRoute(routes, path, method);
    if (!matchedRoute) {
      return res.json({
        allowed: true,
        message: "Route not protected",
        step: "PUBLIC_ROUTE",
      });
    }

    const { requireApiKey, requireJWT } = getSecurityFlags(
      matchedRoute.protection?.rules || "",
    );

    if (requireApiKey) {
      if (!apiKey) {
        return res.json({
          allowed: false,
          reason: "API key missing",
          step: "API_KEY_VALIDATION",
        });
      }

      const apiKeyRecord = await apiKeyModel.findOne({
        key: apiKey,
      });

      if (!apiKeyRecord || !apiKeyRecord.isActive) {
        return res.json({
          allowed: false,
          reason: "Invalid or inactive API key",
          step: "API_KEY_VALIDATION",
        });
      }
    }

    if (requireJWT) {
      if (!apiToken) {
        return res.json({
          allowed: false,
          reason: "JWT token missing",
          step: "JWT_VALIDATION",
        });
      }

      console.log("Jwt validation start");
      try {
        const rawToken = apiToken.startsWith("Bearer ")
          ? apiToken.split(" ")[1]
          : apiToken;
        console.log("Raw JWT token:", rawToken);
        const decoded = jwt.verify(rawToken, jwtSettings.secretKey);
        console.log("Decoded JWT token:", decoded);
      } catch (error) {
        return res.json({
          allowed: false,
          reason: "Invalid JWT token",
          step: "JWT_VALIDATION",
        });
      }
    }

    if (matchedRoute.security?.rateLimiting?.enabled && rateLimits) {
      const key = `${projectId}:${apiKey || "anonymous"}`;
      let current = 1;
      if (redisClient) {
        current = await redisClient.incr(key);
        const ttl = await redisClient.ttl(key);

        if (current === 1 || ttl === -1) {
          await redisClient.expire(key, rateLimits.windowTime);
        }
      }

      console.log("Rate limit key:", key);
      console.log("Current count:", current);
      console.log("Limit:", rateLimits.limit);

      if (current > rateLimits.limit) {
        return res.json({
          allowed: false,
          reason: "Rate limit exceeded",
          step: "RATE_LIMITING",
        });
      }
    }
    return res.json({
      allowed: true,
      message: "Request allowed",
      step: "SUCCESS",
    });
  } catch (error) {
    console.error("Validation error:", error);
    return res.json({
      allowed: false,
      message: "Internal server error",
      step: "ERROR",
    });
  }
};

module.exports = {
  validateRequest,
};
