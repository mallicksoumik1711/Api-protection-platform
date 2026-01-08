const express = require("express");
const router = express.Router();

const generateApiKey = require("../controllers/apikey.controller");

router.post("/generate", generateApiKey);

module.exports = router;