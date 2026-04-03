const protectedRouteModel = require("../models/protectedRoute.model");

const createProtectedRoute = async (req, res) => {
  try {
    const { projectId, route, request, protection, security, description } =
      req.body;

    if (!projectId) {
      return res.status(400).json({
        success: false,
        message: "Project ID is required.",
      });
    }

    if (!route || !route.base) {
      return res.status(400).json({
        success: false,
        message: "Base route is required.",
      });
    }

    if (!protection || !protection.rules) {
      return res.status(400).json({
        success: false,
        message: "Protection type is required.",
      });
    }

    const routeData = {
      base: route.base,
      sub: route.sub || "",
      child: route.child || "",
      protectNestedRoute: route.protectNestedRoute || false,
    };

    const newProtectedRoute = await protectedRouteModel.create({
      projectId,
      route: routeData,
      request: {
        method: request?.method || "ALL",
        priority: request?.priority || "Normal",
      },
      protection: {
        rules: protection.rules,
      },
      security: {
        rateLimiting: {
          enabled: security?.rateLimiting?.enabled ?? true,
        },
        botProtection: {
          enabled: security?.botProtection?.enabled ?? false,
        },
        protectionEnabled: security?.protectionEnabled ?? true,
      },
      description: description || "",
    });

    return res.status(201).json({
      success: true,
      message: "Protected route created successfully.",
      data: newProtectedRoute,
    });
  } catch (error) {
    console.error("Error creating protected route:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while creating the protected route.",
      error: error.message,
    });
  }
};

module.exports = {
  createProtectedRoute,
};
