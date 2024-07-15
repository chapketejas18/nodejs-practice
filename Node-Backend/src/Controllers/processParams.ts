import { Request, Response } from "express";

const processParams = (req: Request, res: Response) => {
  res.json({ message: "Data processed successfully." });
};

export = processParams;
