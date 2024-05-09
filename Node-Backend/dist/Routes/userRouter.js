"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const userRegistration_1 = require("../Controllers/userRegistration");
const validationRegistration_1 = require("../Middleware/validationRegistration");
const dummyDataController_1 = require("../Controllers/dummyDataController");
const mockDataController_1 = require("../Controllers/mockDataController");
const validationParams_1 = require("../Middleware/validationParams");
const authMiddleware_1 = __importDefault(require("../Middleware/authMiddleware"));
const processParams_1 = __importDefault(require("../Controllers/processParams"));
const validateLocation_1 = __importDefault(require("../Middleware/validateLocation"));
router.post("/register", validationRegistration_1.validateRegistrationInput, validateLocation_1.default, userRegistration_1.registerUser);
router.post("/getdummydata", dummyDataController_1.getDummyData);
router.get("/generate", authMiddleware_1.default, dummyDataController_1.generateDummyData, dummyDataController_1.writeDummyDataToFile);
router.route("/mockdata").get(mockDataController_1.getData).post(mockDataController_1.createData);
router
    .route("/mockdata/:id")
    .get(validationParams_1.validateIdParam, mockDataController_1.getDataById)
    .delete(validationParams_1.validateIdParam, mockDataController_1.deleteDataById)
    .put(validationParams_1.validateIdParam, mockDataController_1.updateDataById);
router.get("/errorhandler", () => {
    throw new Error("Error found here");
});
router.post("/processparams", validationParams_1.validateParameters, processParams_1.default);
router.get("/healthcheck", (req, res) => {
    res.status(200).json({ message: "Everything is working properly" });
});
exports.default = router;
