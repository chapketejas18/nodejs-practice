"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
    username: {
        type: String,
    },
    city: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
});
