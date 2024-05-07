const validateIdParam = (req, res, next) => {
  const id = Number(req.params.id);
  if (isNaN(id) || id <= 0) {
    return res.status(400).json({ error: "Invalid ID parameter" });
  }
  next();
};

const validateParameters = (req, res, next) => {
  const { user, mail } = req.body;
  if (!user || !mail) {
    return res
      .status(400)
      .json({ error: "Parameters user and mail are required." });
  }
  next();
};

module.exports = { validateIdParam, validateParameters };
