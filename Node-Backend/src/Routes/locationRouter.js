const express = require("express");
const locationValidation = require("../Middleware/locationValidation");

const router = express.Router();

router.get("/profile", locationValidation);

module.exports = router;
