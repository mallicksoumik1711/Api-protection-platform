const express = require("express");
const router = express.Router();

const {
  createProtectedRoute,
  getProtectedRoutes,
} = require("../controllers/protectedRoute.controller");
const authMiddleware = require("../middleware/auth.middleware")

router.post("/create", authMiddleware, createProtectedRoute);
router.get("/:projectId", authMiddleware, getProtectedRoutes);

module.exports = router;
