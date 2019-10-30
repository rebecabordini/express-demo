var express = require("express");
var router = express.Router();

var userHandler = require("../middlewares/userHandler");

router.use(userHandler);

router.get("/", function(req, res, next) {
  res.send(`pong ${req.userName}`);
});

module.exports = router;
