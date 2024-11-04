var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('sersched', { title: 'Schedule a Service' });
});

module.exports = router;
