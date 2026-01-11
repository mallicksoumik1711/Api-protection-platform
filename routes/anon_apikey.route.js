const express = require("express");
const router = express.Router();

const {generateAnonApiKey, getAnonApiKeys} = require("../controllers/anon_apikey.controller");

router.post("/generate-anon", generateAnonApiKey);
router.get("/anon-key-status", getAnonApiKeys);

module.exports = router;