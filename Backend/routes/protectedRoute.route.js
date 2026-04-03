const express = require("express");
const router = express.Router();

const {
  createProtectedRoute,
} = require("../controllers/protectedRoute.controller");
const authMiddleware = require("../middleware/auth.middleware")

router.post("/create", authMiddleware, createProtectedRoute);

module.exports = router;
