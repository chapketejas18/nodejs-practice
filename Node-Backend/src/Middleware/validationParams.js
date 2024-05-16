const validateIdParam = (req, res, next) => {
  const id = Number(req.params.id);
  if (isNaN(id) || id <= 0) {
    return res.status(400).json({ error: "Invalid ID parameter" });
  }
  next();
};

module.exports = { validateIdParam };
