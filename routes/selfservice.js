var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('selfservice', { title: 'Self Service' });
});

module.exports = router;
