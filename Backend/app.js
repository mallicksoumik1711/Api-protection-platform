require("dotenv").config();

const cors = require('cors');

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

require("./utils/apiKeyExpiry");

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const databaseConnection = require("./config/db.config");
databaseConnection();

const dummyData = require("./routes/dummyData.route");
const authRoutes = require("./routes/auth.route");
const apiKeyRoutes = require("./routes/apikey.route");
const anonApiKeyRoutes = require("./routes/anon_apikey.route");

const gateway = require("./gateway/gateway");
app.use(gateway);

app.use("/api", dummyData);
app.use("/unprotected-api", dummyData);

app.use("/auth", authRoutes);
app.use("/apikeys", apiKeyRoutes);
app.use("/anon-apikeys", anonApiKeyRoutes);

module.exports = app;
