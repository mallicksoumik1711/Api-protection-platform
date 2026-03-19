const ApiLogModel = require("../models/apilog.model");

const getApiLogs = async (req, res) => {
  try {
    const logs = await ApiLogModel.find()
      .sort({
        createdAt: -1,
      })
      .limit(50);
    res.status(200).json(logs);
  } catch (e) {
    res.status(500).json({ message: "Error fetching logs" });
  }
};

module.exports = { getApiLogs };
