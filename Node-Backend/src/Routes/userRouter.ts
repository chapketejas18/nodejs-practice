import express = require("express");
import { Request, Response, NextFunction } from "express";
const router = express.Router();
import { registerUser } from "../Controllers/userRegistration";
import { validateRegistrationInput } from "../Middleware/validationRegistration";
import DummyDataHandler from "../Controllers/dummyDataController";
import MockDataHandler from "../Controllers/mockDataController";
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

router.post("/getdummydata", DummyDataHandler.getDummyData);
router.get(
  "/generate",
  authenticate,
  DummyDataHandler.generateDummyData,
  DummyDataHandler.writeDummyDataToFile
);

router
  .route("/mockdata")
  .get(MockDataHandler.getData)
  .post(MockDataHandler.createData);

router
  .route("/mockdata/:id")
  .get(MockDataHandler.getDataById)
  .delete(MockDataHandler.deleteDataById)
  .put(MockDataHandler.updateDataById);

router.get("/errorhandler", () => {
  throw new Error("Error found here");
});

router.post("/processparams", validateParameters, processParams);

router.get("/healthcheck", (req: Request, res: Response) => {
  res.status(200).json({ message: "Everything is working properly" });
});

export default router;
