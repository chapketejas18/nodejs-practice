exports.registerUser = (req, res) => {
  const { username, email } = req.body;
  res
    .status(200)
    .json({ message: `User ${username} registered with email ${email}` });
};
