const express = require("express");
const router = express.Router();
const { registerUser } = require("../Controllers/userRegistration");

const {
  validateRegistrationInput,
} = require("../Middleware/validationRegistration");

const {
  generateMockData,
  writeMockDataToFile,
  getDummyData,
  getCustomHeader,
} = require("../Controllers/dummyDataController");

const {
  getData,
  createData,
  getDataById,
} = require("../Controllers/mockDataController");

const { validateIdParam } = require("../Middleware/validationParams");

const locationValidation = require("../Middleware/locationValidation");
const authenticate = require("../Middleware/authMiddleware");

router.post("/register", validateRegistrationInput, registerUser);
router.get("/generate", authenticate, generateMockData, writeMockDataToFile);
router.post("/getdummydata", getCustomHeader, getDummyData);
router.route("/mockdata").get(getData).post(createData);
router.get("/mockdata/:id", validateIdParam, getDataById);
router.get("/profile", locationValidation);

module.exports = router;
