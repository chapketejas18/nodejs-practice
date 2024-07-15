const operations = require("./lib/math");
const path = require("path");
const { createObjectCsvWriter } = require("csv-writer");
const express = require("express");
const app = express();

app.use("/", (req, res) => {
  const num1 = 10;
  const num2 = 5;

  const addition = operations.add(num1, num2);
  const subtraction = operations.sub(num1, num2);
  const multiplication = operations.multiply(num1, num2);
  const division = operations.divide(num1, num2);

  const data = [
    { Operation: "Addition", Num1: num1, Num2: num2, Result: addition },
    { Operation: "Subtraction", Num1: num1, Num2: num2, Result: subtraction },
    {
      Operation: "Multiplication",
      Num1: num1,
      Num2: num2,
      Result: multiplication,
    },
    { Operation: "Division", Num1: num1, Num2: num2, Result: division },
  ];

  writer
    .writeRecords(data)
    .then(() => {
      console.log("Done writing to CSV!");
    })
    .catch((err) => {
      console.error("Error writing to CSV:", err);
    });

  res.status(200).send(data);
});

const writer = createObjectCsvWriter({
  path: path.resolve(__dirname, "Outputs/data.csv"),
  header: [
    { id: "Operation", title: "Operations" },
    { id: "Num1", title: "Num1" },
    { id: "Num2", title: "Num2" },
    { id: "Result", title: "Result" },
  ],
});

app.listen(8080);
