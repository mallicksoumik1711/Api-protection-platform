const express = require("express");
const router = express.Router();

const {generateApiKey, generateAnonApiKey, getApiKeys} = require("../controllers/apikey.controller");

router.post("/generate", generateApiKey);
router.post("/generate-anon", generateAnonApiKey);
router.get("/key-status", getApiKeys);

module.exports = router;