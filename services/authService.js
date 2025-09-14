const jwt = require('jsonwebtoken');
const SECRET = 'supersecretkey';

// Dummy user
const USER = { username: 'admin', password: 'password' };

exports.authenticate = (username, password) => {
  if (username === USER.username && password === USER.password) {
    return jwt.sign({ username }, SECRET, { expiresIn: '1h' });
  }
  return null;
};

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401);
  jwt.verify(token, SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
