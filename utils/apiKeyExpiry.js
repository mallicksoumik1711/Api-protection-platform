const cron = require("node-cron");
const apiKeyModel = require("../models/apikey.model");

cron.schedule("*/1 * * * *", async () => {
  await apiKeyModel.updateMany(
    { expiresAt: { $lte: new Date() }, isActive: true },
    { $set: { isActive: false } }
  );
});
