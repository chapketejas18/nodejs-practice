import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

const secretKey =
  "b44fd2de00412db5ebc7350536b59e86731142f100deef1d486972b9c22e6b11";

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.headers.authorization as string;

  if (!token) {
    res.status(401).json({ error: "Authentication failed. Token is missing." });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Authentication failed. Invalid token." });
  }
};

export default authenticate;
