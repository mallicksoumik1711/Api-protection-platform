const express = require('express');
const router = express.Router();

const { getApiLogs } = require("../controllers/apilog.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/all-logs", authMiddleware, getApiLogs);

module.exports = router;