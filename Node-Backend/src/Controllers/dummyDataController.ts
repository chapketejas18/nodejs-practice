import fs from "fs";
import path from "path";
import { Request, Response, NextFunction } from "express";

interface UserData {
  id: number;
  name: string;
  email: string;
  age: number;
}

class DummyDataHandler {
  private mockData: UserData[];

  constructor() {
    this.mockData = [];
  }

  generateDummyData(req: Request, res: Response, next: NextFunction): void {
    for (let i = 1; i <= 10; i++) {
      this.mockData.push({
        id: i,
        name: `User ${i}`,
        email: `user${i}@example.com`,
        age: Math.floor(Math.random() * 50) + 20,
      });
    }

    (req as any).mockData = this.mockData;
    next();
  }

  writeDummyDataToFile(req: Request, res: Response): void {
    const mockDataPath = path.join(__dirname, "../../", "dummyData.json");

    fs.writeFile(
      mockDataPath,
      JSON.stringify(this.mockData),
      (err: NodeJS.ErrnoException | null) => {
        if (err) {
          res.status(500).send("Error writing mock data to file");
        } else {
          res.send("Mock data generated and written to file.");
        }
      }
    );
  }

  getDummyData(req: Request, res: Response): void {
    try {
      const mockData: UserData[] = require("../dummyData.json");
      if (mockData.length === 0) {
        res.status(404).json({
          error: "No data available at this moment!! Please try again later...",
        });
      } else {
        res.json(mockData);
      }
    } catch (error) {
      const errnoError = error as NodeJS.ErrnoException;
      if (errnoError.code === "MODULE_NOT_FOUND") {
        res.status(404).json({
          error: "No file and data",
        });
      } else {
        res.status(500).json({
          error: "Internal server error",
        });
      }
    }
  }
}

export default new DummyDataHandler();
