const express = require("express");
const bodyParser = require("body-parser");
const userRouter = require("./Routes/userRouter");
const authenticate = require("./Middleware/authMiddleware");
const logRequest = require("./Middleware/logRequest");
const errorHandler = require("./Middleware/errorHandler");

require("dotenv").config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 9000;

app.use(logRequest);
app.use(authenticate);
app.use("/api", userRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
