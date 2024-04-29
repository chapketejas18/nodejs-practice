const errorHandler = (err, req, res, next) => {
  let statusCode = 500;
  let errorMessage = "Internal Server Error";

  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    statusCode = 400;
    errorMessage = "Bad Request - Invalid JSON";
  } else if (err.statusCode) {
    statusCode = err.statusCode;
    errorMessage = err.message;
  }

  console.error(`Error: ${errorMessage}`);

  res.status(statusCode).json({ error: errorMessage });
};

module.exports = errorHandler;
