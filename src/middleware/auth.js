const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ message: 'Token manquant' });
  }

  req.user = { id: 'demo-user', role: 'admin' };
  return next();
};

module.exports = authMiddleware;
