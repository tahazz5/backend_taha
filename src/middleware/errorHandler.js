const errorHandler = (err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message || 'Quelque chose s\'est mal passé!',
    details: err.details || null,
  });
};

module.exports = errorHandler;
