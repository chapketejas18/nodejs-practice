const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./Routes/userRouter");
require("dotenv").config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 9000;

app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
