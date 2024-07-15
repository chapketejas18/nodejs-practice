import { Request, Response } from "express";

export const registerUser = (req: Request, res: Response): void => {
  const { username, email } = req.body as { username: string; email: string };
  res
    .status(200)
    .json({ message: `User ${username} registered with email ${email}` });
};
