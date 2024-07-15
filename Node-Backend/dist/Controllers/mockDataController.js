"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDataById = exports.deleteDataById = exports.getData = exports.createData = exports.getDataById = void 0;
const fs = require("fs");
const path = require("path");
const mockData = require("../../mockData.json");
const mockDataPath = path.join(__dirname, "../../mockData.json");
const getData = (req, res) => {
    if (mockData.length === 0) {
        res.status(404).json({
            error: "No data available at this moment!! Please try again later...",
        });
    }
    else {
        res.json(mockData);
    }
};
exports.getData = getData;
const createData = (req, res) => {
    const body = req.body;
    const newEntry = Object.assign(Object.assign({}, body), { id: mockData.length + 1 });
    mockData.push(newEntry);
    fs.writeFile(mockDataPath, JSON.stringify(mockData), (err) => {
        if (err) {
            console.log("Error writing to file:", err);
            res.status(500).json({ error: "Internal server error" });
        }
        res.json({ status: "Created Successfully" });
    });
};
exports.createData = createData;
const getDataById = (req, res) => {
    const id = Number(req.params.id);
    const user = mockData.find((item) => item.id === id);
    if (!user) {
        res.status(404).json({ error: "User not found" });
    }
    res.json(user);
};
exports.getDataById = getDataById;
const deleteDataById = (req, res) => {
    const id = Number(req.params.id);
    const index = mockData.findIndex((item) => item.id === id);
    if (index === -1) {
        res.status(200).json({ message: "No data found for this ID" });
    }
    mockData.splice(index, 1);
    fs.writeFile(mockDataPath, JSON.stringify(mockData), (err) => {
        if (err) {
            console.log("Error writing to file:", err);
            res.status(500).json({ error: "Internal server error" });
        }
        res.json({ status: "Deleted Successfully" });
    });
};
exports.deleteDataById = deleteDataById;
const updateDataById = (req, res) => {
    const id = Number(req.params.id);
    const index = mockData.findIndex((item) => item.id === id);
    const body = req.body;
    const updatedEntry = Object.assign(Object.assign({}, body), { id });
    mockData[index] = updatedEntry;
    fs.writeFile(mockDataPath, JSON.stringify(mockData), (err) => {
        if (err) {
            console.log("Error writing to file:", err);
            res.status(500).json({ error: "Internal server error" });
        }
        res.json({ status: "Updated Successfully" });
    });
};
exports.updateDataById = updateDataById;
