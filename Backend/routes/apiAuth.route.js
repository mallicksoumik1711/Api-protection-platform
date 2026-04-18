const express = require("express");
const router = express.Router();
const { apiToken } = require("../controllers/apiAuth.controller");

router.post("/token", apiToken);

module.exports = router;