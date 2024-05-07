import express = require("express");
import bodyParser = require("body-parser");
import userRouter from "./Routes/userRouter";
import authenticate from "./Middleware/authMiddleware";
import logRequest from "./Middleware/logRequest";
import errorHandler from "./Middleware/errorHandler";
import limiter from "./Middleware/requestLimiter";
import dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(bodyParser.json());

const PORT: number = parseInt(process.env.PORT as string, 10) || 9000;

app.use(limiter);
app.use(logRequest);
// app.use(authenticate);
app.use("/api", userRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
