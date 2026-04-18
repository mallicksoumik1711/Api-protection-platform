const express = require("express");
const router = express.Router();
const {validateRequest} = require("../controllers/validator.controller");

router.post("/validate", validateRequest);

module.exports = router;