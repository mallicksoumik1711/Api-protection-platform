const express = require("express");
const dummyData = require("../controllers/dummyData.controller");
const router = express.Router();

router.get("/dummydata", dummyData);

module.exports = router;