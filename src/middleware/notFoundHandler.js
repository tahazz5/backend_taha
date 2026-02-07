const notFoundHandler = (req, res) => {
  res.status(404).json({
    message: 'Route non trouvée',
    path: req.originalUrl,
  });
};

module.exports = notFoundHandler;
