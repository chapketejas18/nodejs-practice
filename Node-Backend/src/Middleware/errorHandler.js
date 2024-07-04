const errorHandler = (err, req, res, next) => {
  const statusCode = err?.statusCode || 500;
  const errorMessage = err?.message || "Internal Server Error";
  res.status(statusCode).json({ error: errorMessage });
};

module.exports = errorHandler;
