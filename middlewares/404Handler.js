const FourHundredHandler = (req, res, next) => {
  next(createError(404));
};

module.exports = FourHundredHandler;
