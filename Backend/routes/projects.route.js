const express = require("express");
const router = express.Router();
const { createProject } = require("../controllers/projects.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/create-project", authMiddleware, createProject);

module.exports = router;
