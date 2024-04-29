const express = require("express");
const {
  validateRegistrationInput,
} = require("../Middleware/validationRegistration");

const router = express.Router();

router.post("/register", validateRegistrationInput, (req, res) => {
  const { username, email } = req.body;
  res
    .status(200)
    .json({ message: `User ${username} registered with email ${email}` });
});

module.exports = router;
