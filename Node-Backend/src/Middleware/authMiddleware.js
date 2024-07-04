const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const secretKey = process.env.SECRECT_KEY;

const authenticate = (req, res, next) => {
  const token = req.headers.auth;

  if (!token) {
    return res
      .status(401)
      .json({ error: "Authentication failed. Token is missing." });
  }

  if (!token.startsWith("")) {
    return res
      .status(401)
      .json({ error: "Authentication failed. Invalid token format." });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ error: "Authentication failed. Invalid token." });
  }
};

module.exports = authenticate;
