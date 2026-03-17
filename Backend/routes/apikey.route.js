const express = require("express");
const router = express.Router();

const {
  generateApiKey,
  getApiKeys,
  getApiKeysDetails,
} = require("../controllers/apikey.controller");

router.post("/generate", generateApiKey);
router.get("/details", getApiKeysDetails);
router.get("/key-status", getApiKeys);

module.exports = router;
