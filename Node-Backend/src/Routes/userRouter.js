const express = require("express");
const router = express.Router();
const { registerUser } = require("../Controllers/userRegistration");
const {
  validateRegistrationInput,
} = require("../Middleware/validationRegistration");
const {
  generateDummyData,
  writeDummyDataToFile,
  getDummyData,
} = require("../Controllers/dummyDataController");
const {
  getData,
  createData,
  getDataById,
  deleteDataById,
  updateDataById,
} = require("../Controllers/mockDataController");
const {
  validateIdParam,
  validateParameters,
} = require("../Middleware/validationParams");
// const locationValidation = require("../Middleware/locationValidation");
const authenticate = require("../Middleware/authMiddleware");
const { processParams } = require("../Controllers/processParams");

router.post("/register", validateRegistrationInput, registerUser);

router.post("/getdummydata", getDummyData);
router.get("/generate", authenticate, generateDummyData, writeDummyDataToFile);

router.route("/mockdata").get(getData).post(createData);
router
  .route("/mockdata/:id")
  .get(validateIdParam, getDataById)
  .delete(validateIdParam, deleteDataById)
  .put(validateIdParam, updateDataById);

router.get("/profile", locationValidation);

router.get("/errorhandler", () => {
  throw new Error("Error found here");
});

router.post("/processparams", validateParameters, processParams);

module.exports = router;
