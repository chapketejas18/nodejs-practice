import { Request, Response, NextFunction } from "express";

const validateLocationCode = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { countrycode } = req.query as { countrycode: string };
  if (countrycode && countrycode.toUpperCase() === "IN") {
    next();
  } else {
    res
      .status(403)
      .json({ error: "Access denied. Request from an unexpected region." });
  }
};

export default validateLocationCode;
