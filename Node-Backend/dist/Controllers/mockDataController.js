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
const UserRepository_1 = __importDefault(require("../repository/user/UserRepository"));
const joi_1 = require("../config/joi");
class MockDataHandler {
    constructor() {
        this.getData = (request, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield UserRepository_1.default.getAllUsers();
                response.json(users);
            }
            catch (err) {
                const typedError = err;
                response.status(500).json({ error: typedError });
            }
        });
        this.createData = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const { error } = joi_1.mockUserSchema.validate(body);
                if (error) {
                    res.status(400).json({ error: error.details[0].message });
                    return;
                }
                yield UserRepository_1.default.createUser(body);
                res.json({ status: "Created Successfully" });
            }
            catch (error) {
                console.log("Error creating data:", error);
                res.status(500).json({ error: "Internal server error" });
            }
        });
        this.getDataById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const user = yield UserRepository_1.default.findUserById(id);
                if (!user) {
                    res.status(404).json({ error: "User not found" });
                    return;
                }
                res.json(user);
            }
            catch (err) {
                console.error("Error:", err);
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
        this.deleteDataById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const deletedUser = yield UserRepository_1.default.deletdUserById(id);
                if (!deletedUser) {
                    res.status(404).json({ message: "No data found for this ID" });
                    return;
                }
                res.json({ status: "Deleted Successfully" });
            }
            catch (err) {
                console.error("Error:", err);
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
        this.updateDataById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const body = req.body;
                const { error } = joi_1.mockUserSchema.validate(body);
                if (error) {
                    res.status(400).json({ error: error.details[0].message });
                    return;
                }
                const updatedUser = yield UserRepository_1.default.updateDataById(id, body);
                if (!updatedUser) {
                    res.status(404).json({ message: "No data found for this ID" });
                    return;
                }
                res.json({ status: "Updated Successfully" });
            }
            catch (err) {
                console.error("Error:", err);
                res.status(500).json({ error: "Internal Server Error" });
            }
        });
    }
}
exports.default = new MockDataHandler();
