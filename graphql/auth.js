const jwt = require('jsonwebtoken');
const SECRET = 'supersecretkey';

function authenticateTokenGraphQL(req) {
  const authHeader = req.headers['authorization'] || req.headers['Authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return {};
  try {
    const user = jwt.verify(token, SECRET);
    return { user };
  } catch (err) {
    return {};
  }
}

module.exports = { authenticateTokenGraphQL };
