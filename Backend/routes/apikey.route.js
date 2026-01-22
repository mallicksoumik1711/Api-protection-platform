const express = require("express");
const router = express.Router();

const {generateApiKey, getApiKeys} = require("../controllers/apikey.controller");

router.post("/generate", generateApiKey);
router.get("/key-status", getApiKeys);

module.exports = router;