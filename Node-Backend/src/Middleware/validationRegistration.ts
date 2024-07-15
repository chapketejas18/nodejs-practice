import { Request, Response, NextFunction } from "express";
import { userSchema } from "../config/joi";

function validateRegistrationInput(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const { error } = userSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: error.details[0].message });
  }
  next();
}

export { validateRegistrationInput };
