var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('support', { title: 'Support' });
});

module.exports = router;
