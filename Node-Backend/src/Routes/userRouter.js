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
// const locationValidation = require("../Middleware/locationValidation");

router.post("/register", validateRegistrationInput, registerUser);

router.route("/mockdata").get(getData).post(createData);
router
  .route("/mockdata/:id")
  .get(validateIdParam, getDataById)
  .delete(validateIdParam, deleteDataById)
  .put(validateIdParam, updateDataById);

// router.get("/profile", locationValidation);

module.exports = router;
