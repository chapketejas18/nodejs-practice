"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const userRouter_1 = __importDefault(require("./Routes/userRouter"));
const logRequest_1 = __importDefault(require("./Middleware/logRequest"));
const errorHandler_1 = __importDefault(require("./Middleware/errorHandler"));
const requestLimiter_1 = __importDefault(require("./Middleware/requestLimiter"));
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(bodyParser.json());
const PORT = parseInt(process.env.PORT, 10) || 9000;
app.use(requestLimiter_1.default);
app.use(logRequest_1.default);
// app.use(authenticate);
app.use("/api", userRouter_1.default);
app.use(errorHandler_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
