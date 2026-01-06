require("dotenv").config();

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const databaseConnection = require("./config/db.config");
databaseConnection();

// const apiKeysAuth = require("./middleware/apiKeysAuth");
// const rateLimit = require("./middleware/rateLimiter");
const dummyData = require("./routes/dummyData.route");
const authRoutes = require("./routes/auth.route");
// const authMiddleware = require("./middleware/auth.middleware");

const gateway = require("./gateway/gateway");
app.use(gateway);

app.get("/test", (req, res) => {
  res.send("Working fine");
});

// app.use("/api", apiKeysAuth, rateLimit, authMiddleware, dummyData); //actuall correct order for protected routes, only for users who are logged in or validated
// app.use("/unprotected-api", apiKeysAuth, rateLimit, dummyData); //for unprotected routes, only api key validation needed
// app.use("/auth", rateLimit, authRoutes);

app.use("/api", dummyData);
app.use("/unprotected-api", dummyData);
app.use("/auth", authRoutes);

module.exports = app;
