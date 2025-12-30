const apiKeys = require("../config/apiKeys");

const validateResponse = (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey) {
    return res.status(401).json({ message: "API key is missing" });
  }
  const keyData = apiKeys.find(
    (keyObj) => keyObj.key === apiKey && keyObj.active
  );
  if (!keyData) {
    return res.status(403).json({ message: "Invalid or inactive API key" });
  }
  req.apiKey = keyData;
  next();
};

module.exports = validateResponse;
