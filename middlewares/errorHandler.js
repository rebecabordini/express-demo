const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message);
};

module.exports = errorHandler;
