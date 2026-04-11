const projectModel = require("../models/projects.model");
const protectedRouteModel = require("../models/protectedRoute.model");
const jwtSettingsModel = require("../models/jwtSettings.model");
const rateLimitModel = require("../models/rateLimit.model");

const getIntegrationData = async (req, res) => {
  try {
    const { projectId } = req.params;
    const project = await projectModel.findOne({ projectId });
    const protectedRoutes = await protectedRouteModel.find({ projectId });
    const jwtSettings = await jwtSettingsModel.findOne({ projectId });
    const rateLimits = await rateLimitModel.find({ projectId });

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({
      project,
      protectedRoutes,
      jwtSettings,
      rateLimits,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getIntegrationData,
};
