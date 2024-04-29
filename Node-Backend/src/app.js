const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./Routes/userRouter");
const mockDataRoutes = require("./Routes/mockDataRoutes");
const locationRouter = require("./Routes/locationRouter");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 9000;

app.use("/api", userRouter);
app.use("/api/mockdata", mockDataRoutes);
app.use("/api", locationRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
