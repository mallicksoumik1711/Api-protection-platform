const express = require("express");
const router = express.Router();

const {
  generateApiKey,
  getApiKeys,
  getApiKeysDetails,
  getUsageStats
} = require("../controllers/apikey.controller");

router.post("/generate", generateApiKey);
router.get("/details", getApiKeysDetails);
router.get("/key-status", getApiKeys);
router.get("/usage", getUsageStats);

module.exports = router;
