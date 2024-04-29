const fs = require("fs");
const path = require("path");

const generateMockData = (req, res, next) => {
  const mockData = [];

  for (let i = 1; i <= 10; i++) {
    mockData.push({
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`,
      age: Math.floor(Math.random() * 50) + 20,
    });
  }

  req.mockData = mockData;
  next();
};

const writeMockDataToFile = (req, res) => {
  const mockData = req.mockData;
  const mockDataPath = path.join(__dirname, "..", "dummyData.json");

  fs.writeFile(mockDataPath, JSON.stringify(mockData), (err) => {
    if (err) {
      console.error("Error writing mock data to file:", err);
      res.status(500).send("Error writing mock data to file");
    } else {
      console.log(
        "Mock data has been successfully generated and written to dummyData.json"
      );
      res.send("Mock data generated and written to file.");
    }
  });
};

const getDummyData = (req, res) => {
  try {
    const mockData = require("../dummyData.json");
    if (mockData.length === 0) {
      res.status(404).json({
        error: "No data available at this moment!! Please try again later...",
      });
    } else {
      res.json(mockData);
    }
  } catch (error) {
    if (error.code === "MODULE_NOT_FOUND") {
      console.error("No file and data");
      res.status(404).json({
        error: "No file and data",
      });
    } else {
      console.error("Error occurred while fetching data:", error);
      res.status(500).json({
        error: "Internal server error",
      });
    }
  }
};

const getCustomHeader = (req, res, next) => {
  try {
    const trackingId = req.headers["X-Tracking-ID"];
    res.json({
      message: "This is a protected route",
      user: req.user,
      uniqueTrackingId: trackingId,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  generateMockData,
  writeMockDataToFile,
  getDummyData,
  getCustomHeader,
};
