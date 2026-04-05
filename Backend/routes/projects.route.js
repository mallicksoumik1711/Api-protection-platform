const express = require("express");
const router = express.Router();
const {
  createProject,
  getProjects,
} = require("../controllers/projects.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/create-project", authMiddleware, createProject);
router.get("/get-project", authMiddleware, getProjects);

module.exports = router;
