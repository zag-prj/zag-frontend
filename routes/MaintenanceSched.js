var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('MaintenanceSched', { title: 'ApexCare Solutions' });
});

module.exports = router;
