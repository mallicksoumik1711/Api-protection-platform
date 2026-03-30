const rateLimitModel = require("../models/rateLimit.model");

const saveRateLimitSettings = async (req, res) => {
  try {
    let { projectId, limit, windowTime, type } = req.body;

    if (!projectId) {
      return res
        .status(400)
        .send({ success: false, message: "Project ID is required." });
    }

    const rateLimitData = await rateLimitModel.findOneAndUpdate(
      { projectId },
      {
        limit,
        windowTime,
        type,
        updatedAt: Date.now(),
      },
      { new: true, upsert: true },
    );
    return res.status(200).send({
      success: true,
      message: "Rate limit settings saved successfully.",
      data: rateLimitData,
    });
  } catch (error) {
    console.error("Failed to save rate limit settings", error);
    return res.status(500).send({
      success: false,
      message: "An error occurred while saving rate limit settings.",
      error: error.message,
    });
  }
};

module.exports = {
  saveRateLimitSettings,
};
