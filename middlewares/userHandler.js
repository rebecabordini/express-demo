const USERNAME = "Rebeca";

const userHandler = (req, res, next) => {
  req.userName = USERNAME;
  next();
};

module.exports = userHandler;
