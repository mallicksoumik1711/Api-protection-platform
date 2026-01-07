require("dotenv").config();

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const databaseConnection = require("./config/db.config");
databaseConnection();

const dummyData = require("./routes/dummyData.route");
const authRoutes = require("./routes/auth.route");

const gateway = require("./gateway/gateway");
app.use(gateway);

app.use("/api", dummyData);
app.use("/unprotected-api", dummyData);
app.use("/auth", authRoutes);

module.exports = app;
