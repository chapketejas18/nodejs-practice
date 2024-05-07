const express = require("express");
const router = express.Router();
const { registerUser } = require("../Controllers/userRegistration");
const {
  validateRegistrationInput,
} = require("../Middleware/validationRegistration");
const {
  getData,
  createData,
  getDataById,
  deleteDataById,
  updateDataById,
} = require("../Controllers/mockDataController");
const { validateIdParam } = require("../Middleware/validationParams");
const validateLocationCode = require("../Middleware/validateLocation");

router.post(
  "/register",
  validateRegistrationInput,
  validateLocationCode,
  registerUser
);

router.route("/mockdata").get(getData).post(createData);
router
  .route("/mockdata/:id")
  .get(validateIdParam, getDataById)
  .delete(validateIdParam, deleteDataById)
  .put(validateIdParam, updateDataById);

module.exports = router;
