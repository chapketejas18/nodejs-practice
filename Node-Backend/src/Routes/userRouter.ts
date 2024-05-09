import express = require("express");
import { Request, Response, NextFunction } from "express";
const router = express.Router();
import { registerUser } from "../Controllers/userRegistration";
import { validateRegistrationInput } from "../Middleware/validationRegistration";
import {
  generateDummyData,
  writeDummyDataToFile,
  getDummyData,
} from "../Controllers/dummyDataController";
import {
  getData,
  createData,
  getDataById,
  deleteDataById,
  updateDataById,
} from "../Controllers/mockDataController";
import {
  validateIdParam,
  validateParameters,
} from "../Middleware/validationParams";
import authenticate from "../Middleware/authMiddleware";
import processParams from "../Controllers/processParams";
import validateLocationCode from "../Middleware/validateLocation";

router.post(
  "/register",
  validateRegistrationInput,
  validateLocationCode,
  registerUser
);

router.post("/getdummydata", getDummyData);
router.get("/generate", authenticate, generateDummyData, writeDummyDataToFile);

router.route("/mockdata").get(getData).post(createData);
router
  .route("/mockdata/:id")
  .get(validateIdParam, getDataById)
  .delete(validateIdParam, deleteDataById)
  .put(validateIdParam, updateDataById);

router.get("/errorhandler", () => {
  throw new Error("Error found here");
});

router.post("/processparams", validateParameters, processParams);

router.get("/healthcheck", (req: Request, res: Response) => {
  res.status(200).json({ message: "Everything is working properly" });
});

export default router;
