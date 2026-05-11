const express = require("express");
const router = express.Router();
const {
  createProject,
  getProjects,
  deleteProject,
  updateProject,
  toggleFavourite,
} = require("../controllers/projects.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/create-project", authMiddleware, createProject);
router.get("/get-project", authMiddleware, getProjects);
router.delete("/delete-project/:id", authMiddleware, deleteProject);
router.put("/update-project/:id", authMiddleware, updateProject);
router.put("/:id/favourite", authMiddleware, toggleFavourite);

module.exports = router;
