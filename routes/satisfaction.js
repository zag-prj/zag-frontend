var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('satisfaction', { title: 'Customer Satisfaction Management' });
});

module.exports = router;
