"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const userRouter_1 = __importDefault(require("./Routes/userRouter"));
const logRequest_1 = __importDefault(require("./Middleware/logRequest"));
const errorHandler_1 = __importDefault(require("./Middleware/errorHandler"));
const requestLimiter_1 = __importDefault(require("./Middleware/requestLimiter"));
const dotenv_1 = __importDefault(require("dotenv"));
const country_1 = __importDefault(require("./country"));
const countryModel_1 = __importDefault(require("./model/countryModel"));
const connectToDb_1 = require("./utils/connectToDb");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const PORT = parseInt(process.env.PORT, 10) || 9000;
app.use(requestLimiter_1.default);
app.use(logRequest_1.default);
// app.use(authenticate);
app.use("/api", userRouter_1.default);
app.use(errorHandler_1.default);
const seedDB = () => __awaiter(void 0, void 0, void 0, function* () {
    yield countryModel_1.default.deleteMany({});
    yield countryModel_1.default.insertMany(country_1.default);
});
(0, connectToDb_1.connectToMongoDB)()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield seedDB();
    console.log("Data Inserted");
}))
    .catch((err) => {
    console.error("Data insertion failed", err);
});
app.listen(PORT, () => {
    console.log(`Server started on PORT: ${PORT}`);
});
