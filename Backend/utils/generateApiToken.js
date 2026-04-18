const jwt = require("jsonwebtoken");

const generateApiToken = ({ payload, secret, expiresIn = "1h" }) => {
  if (!payload || !secret) {
    throw new Error("Payload and secret are required for token generation");
  }

  return jwt.sign(payload, secret, { expiresIn });
};

module.exports = generateApiToken;