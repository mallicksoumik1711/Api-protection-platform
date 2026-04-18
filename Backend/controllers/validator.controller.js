const jwt = require("jsonwebtoken");
const projectModel = require("../models/projects.model");
const protectedRouteModel = require("../models/protectedRoute.model");
const jwtModel = require("../models/jwtSettings.model");
const rateLimitModel = require("../models/rateLimit.model");

const redisClient = require("../config/redis");

const validateRequest = async (req, res) => {
  try {
    const { projectId, path, method, token: apiToken } = req.body;
    const authHeader = req.headers["authorization"];
    const apiKey = req.headers["x-api-key"];
    if (!projectId || !path || !method) {
      return res.json({
        allowed: false,
        message: "Missing required fields",
        step: "INPUT_VALIDATION",
      });
    }
    const project = await projectModel.findOne({ projectId });
    if (!project) {
      return res.json({
        allowed: false,
        message: "Project not found",
        step: "PROJECT_VALIDATION",
      });
    }
    try {
      const loginToken = authHeader?.startsWith("Bearer ")
        ? authHeader.split(" ")[1]
        : authHeader;

      if (!loginToken) {
        return res.json({
          allowed: false,
          reason: "Auth token missing",
          step: "AUTH_VALIDATION",
        });
      }

      jwt.verify(loginToken, process.env.JWT_SECRET);
    } catch (err) {
      return res.json({
        allowed: false,
        reason: "Unauthorized user",
        step: "AUTH_VALIDATION",
      });
    }
    const routes = await protectedRouteModel.find({ projectId });
    const jwtSettings = await jwtModel.findOne({ projectId });
    const rateLimits = await rateLimitModel.findOne({ projectId });

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

    if (jwtSettings?.enabled) {
      if (!apiToken) {
        return res.json({
          allowed: false,
          reason: "Token missing",
          step: "JWT_VALIDATION",
        });
      }

      try {
        const rawToken = apiToken?.startsWith("Bearer ")
          ? apiToken.split(" ")[1]
          : apiToken;

        if (!rawToken) {
          return res.json({
            allowed: false,
            reason: "Invalid token format",
            step: "JWT_VALIDATION",
          });
        }

        jwt.verify(rawToken, jwtSettings.secretKey);
      } catch (err) {
        return res.json({
          allowed: false,
          reason: "Invalid token",
          step: "JWT_VALIDATION",
        });
      }
    }

    if (rateLimits?.enabled) {
      const key = `${projectId}:${apiKey || "anonymous"}`;
      let current = 1;
      if (redisClient) {
        current = await redisClient.incr(key);
        if (current === 1) {
          await redisClient.expire(key, rateLimits.windowTime);
        }
      }
      if (current > rateLimits.limit) {
        return res.json({
          allowed: false,
          reason: "Rate limit exceeded",
          step: "RATE_LIMIT",
        });
      }
    }

    return res.json({
      allowed: true,
      message: "Request allowed",
      step: "SUCCESS",
    });
  } catch (err) {
    console.error("Validation error:", err);
    return res.json({
      allowed: false,
      message: "Internal server error",
      step: "SERVER_ERROR",
    });
  }
};

module.exports = {
  validateRequest,
};
