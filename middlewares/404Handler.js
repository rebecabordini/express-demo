const FourHundredHandler = (req, res, next) => {
  const error = new Error(`${req.url} Not found`);
  error.status = 404;
  next(error);
};

module.exports = FourHundredHandler;
