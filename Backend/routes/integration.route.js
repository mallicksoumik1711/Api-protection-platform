const express = require("express");
const router = express.Router();
const { getIntegrationData } = require("../controllers/integration.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/:projectId", authMiddleware, getIntegrationData);

module.exports = router;
