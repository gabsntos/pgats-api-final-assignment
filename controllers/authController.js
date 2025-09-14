const authService = require('../services/authService');

exports.login = (req, res) => {
  const { username, password } = req.body;
  const token = authService.authenticate(username, password);
  if (token) {
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
};
