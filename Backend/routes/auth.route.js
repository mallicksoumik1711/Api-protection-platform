const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  logoutUser,
  getUser,
} = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/me", authMiddleware, getUser);

router.get("/protected", authMiddleware, (req, res) => {
  res.status(200).json({ message: "Authenticated", user: req.user });
});

module.exports = router;
