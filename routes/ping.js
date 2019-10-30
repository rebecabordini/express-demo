var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
})

router.get('/', function(req, res, next) {
  res.send('pong');
});

module.exports = router;
