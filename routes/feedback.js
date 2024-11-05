var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('feedback', { title: 'Customer Feedback' });
});

module.exports = router;
