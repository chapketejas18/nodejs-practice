import { Request, Response, NextFunction } from "express";

const validateIdParam = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const id = Number(req.params.id);
  if (isNaN(id) || id <= 0) {
    res.status(400).json({ error: "Invalid ID parameter" });
  } else {
    next();
  }
};

const validateParameters = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { user, mail } = req.body as { user: string; mail: string };
  if (!user || !mail) {
    res.status(400).json({ error: "Parameters user and mail are required." });
  } else {
    next();
  }
};

export { validateIdParam, validateParameters };
