import express from "express";
import bodyParser from "body-parser";
import userRouter from "./Routes/userRouter";
import authenticate from "./Middleware/authMiddleware";
import logRequest from "./Middleware/logRequest";
import errorHandler from "./Middleware/errorHandler";
import limiter from "./Middleware/requestLimiter";
import dotenv from "dotenv";
import { connectToMongoDB } from "./utils/connectToDb";
import seedUsers from "./user";
import seeduser from "./repository/seed/seedUserModel";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const PORT: number = parseInt(process.env.PORT as string) || 9000;

app.use(helmet());
app.use(compression());
app.use(cors());
app.use(limiter);
app.use(logRequest);
// app.use(authenticate);
app.use("/api", userRouter);
app.use(errorHandler);

const seedDB = async () => {
  const userCount = await seeduser.countDocuments();
  if (userCount === 0) {
    await seeduser.insertMany(seedUsers);
  }
};

connectToMongoDB()
  .then(async () => {
    await seedDB();
    console.log("Data Inserted");
  })
  .catch((err: Error) => {
    console.error("Data insertion failed", err);
  });

app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
