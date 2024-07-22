import fs = require("fs");
import path = require("path");
import { Request, Response } from "express";

interface MockDataItem {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  city: string;
}

const mockData: MockDataItem[] = require("../../mockData.json");
const mockDataPath = path.join(__dirname, "../../mockData.json");

class MockDataHandler {
  getData = (req: Request, res: Response): void => {
    if (mockData.length === 0) {
      res.status(404).json({
        error: "No data available at this moment!! Please try again later...",
      });
    } else {
      res.json(mockData);
    }
  };

  createData = (req: Request, res: Response): void => {
    const body = req.body;
    const newEntry = { ...body, id: mockData.length + 1 };
    mockData.push(newEntry);
    fs.writeFile(mockDataPath, JSON.stringify(mockData), (err) => {
      if (err) {
        console.log("Error writing to file:", err);
        res.status(500).json({ error: "Internal server error" });
      }
      res.json({ status: "Created Successfully" });
    });
  };

  getDataById = (req: Request, res: Response): void => {
    const id = Number(req.params.id);
    const user = mockData.find((item) => item.id === id);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  };

  deleteDataById = (req: Request, res: Response): void => {
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

  updateDataById = (req: Request, res: Response): void => {
    const id = Number(req.params.id);
    const index = mockData.findIndex((item) => item.id === id);
    const body = req.body;
    const updatedEntry = { ...body, id };
    mockData[index] = updatedEntry;
    fs.writeFile(mockDataPath, JSON.stringify(mockData), (err) => {
      if (err) {
        console.log("Error writing to file:", err);
        res.status(500).json({ error: "Internal server error" });
      }
      res.json({ status: "Updated Successfully" });
    });
  };
}

export default new MockDataHandler();
