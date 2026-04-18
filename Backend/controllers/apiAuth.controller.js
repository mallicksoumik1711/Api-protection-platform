const jwtModel = require("../models/jwtSettings.model");
const generateApiToken = require("../utils/generateApiToken");

const apiToken = async (req, res) => {
  try {
    const { projectId, userId } = req.body;
    if (!projectId || !userId) {
      return res.status(400).json({
        message: "Project ID and User ID are required",
      });
    }
    const jwtSettings = await jwtModel.findOne({ projectId });
    if (!jwtSettings || !jwtSettings.enabled) {
      return res.status(400).json({
        message: "JWT authentication is not enabled for this project",
      });
    }

    const token = generateApiToken({
      payload: { userId, projectId },
      secret: jwtSettings.secretKey,
      expiresIn: jwtSettings.expiry || "1h",
    });
    return res.status(200).json({
      success: true,
      token,
    });
  } catch (err) {
    console.error("Error generating API token:", err);
    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  apiToken,
};
