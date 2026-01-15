const cron = require("node-cron");
const apiKeyModel = require("../models/apikey.model");
const anonApiKeyModel = require("../models/anon_apikey.model");

// for regular API keys
cron.schedule("*/5 * * * *", async () => {
  await apiKeyModel.updateMany(
    { expiresAt: { $lte: new Date() }, isActive: true },
    { $set: { isActive: false } }
  );
});

// for anonymous API keys
cron.schedule("*/1 * * * *", async () => {
  await anonApiKeyModel.updateMany(
    {
      expiresAt: { $lte: new Date() },
      isActive: true,
    },
    {
      $set: {
        isActive: false,
      },
    }
  );
});
