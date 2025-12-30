const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const databaseConnection = require("./config/db.config");
require("dotenv").config();
databaseConnection();

const apiKeysAuth = require("./middleware/apiKeysAuth");
const rateLimit = require("./middleware/rateLimiter");
const dummyData = require("./routes/dummyData.route");
const authRoutes = require("./routes/auth.route");

app.get("/test", (req, res) => {
  res.send("Working fine");
});

app.use("/api", apiKeysAuth, rateLimit, dummyData);
app.use("/api/auth", rateLimit, authRoutes);
module.exports = app;
