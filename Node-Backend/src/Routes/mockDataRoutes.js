const express = require("express");
const fs = require("fs");
const path = require("path");
const { validateIdParam } = require("../Middleware/validationParams");

const router = express.Router();

const mockData = require("../mockData.json");
const mockDataPath = path.join(__dirname, "../mockData.json");

router
  .route("/")
  .get((req, res) => {
    if (mockData.length === 0) {
      res.status(404).json({
        error: "No data available at this moment!! Please try again later...",
      });
    } else {
      res.json(mockData);
    }
  })
  .post((req, res) => {
    const body = req.body;
    const newEntry = { ...body, id: mockData.length + 1 };
    mockData.push(newEntry);
    fs.writeFile(mockDataPath, JSON.stringify(mockData), (err) => {
      if (err) {
        console.log("Error writing to file:", err);
        return res.status(500).json({ error: "Internal server error" });
      }
      res.json({ status: "Success", data: mockData });
    });
  });

router.get("/:id", validateIdParam, (req, res) => {
  const id = Number(req.params.id);
  const user = mockData.find((item) => item.id === id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.json(user);
});

module.exports = router;
