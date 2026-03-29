const jwtSettingsModel = require("../models/jwtSettings.model");

const saveJwtSettings = async (req, res) => {
  try {
    let {
      projectId,
      enabled,
      secretKey,
      expiresIn,
      tokenType,
      tokenName,
      algorithm,
    } = req.body;

    if (!projectId) {
      return res
        .status(400)
        .send({ success: false, message: "Project ID is required." });
    }

    if (enabled && !secretKey) {
      return res.status(400).send({
        success: false,
        message: "Secret key is required when JWT is enabled.",
      });
    }

    if (expiresIn && typeof expiresIn !== "string") {
      return res.status(400).send({
        success: false,
        message: "ExpiresIn must be a string like '1h', '30m', etc.",
      });
    }

    if(tokenType === "header"){
        tokenName = "Authorization";
    }

    const existingSettings = await jwtSettingsModel.findOneAndUpdate(
      { projectId },
      {
        enabled,
        secretKey,
        expiresIn,
        tokenType,
        tokenName,
        algorithm,
        updatedAt: Date.now(),
      },
      { new: true, upsert: true },
    );
    return res.status(200).send({
      success: true,
      message: "JWT settings saved successfully.",
      data: existingSettings,
    });
  } catch (error) {
    console.error("Failed to save JWT settings", error);
    return res
      .status(500)
      .send({ success: false, message: "Failed to save JWT settings." });
  }
};

module.exports = {
  saveJwtSettings,
};
