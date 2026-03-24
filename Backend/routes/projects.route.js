const express = require("express");
const router = express.Router();
const { generateProjectId } = require("../controllers/projects.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/generate-projectId", authMiddleware, generateProjectId);

module.exports = router;
