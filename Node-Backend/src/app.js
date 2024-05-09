const express = require("express");
const mockData = require("./mockData");

const app = express();
const port = 3000;

app.get("/api/mockdata", (req, res) => {
  if (mockData.length === 0) {
    res
      .status(404)
      .json({
        error: "No data available at this moment!! Please try again later...",
      });
  } else {
    res.json(mockData);
  }
});

app.use((req, res) => {
  res.status(404).json({ error: "API endpoint not found" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
