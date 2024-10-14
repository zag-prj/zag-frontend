var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('servicehistory', { title: 'Current Services & Service History' });
});

module.exports = router;
