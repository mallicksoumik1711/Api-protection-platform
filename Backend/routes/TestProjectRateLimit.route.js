//testing only. will delete in production

const express = require('express');
const router = express.Router();

const projectRateLimit = require("../services/projectRateLimit.service");

router.get("/test-rl-service", projectRateLimit, (req, res) => {
    res.json({message: "Request successful"});
});

module.exports = router;