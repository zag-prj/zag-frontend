var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('MaintenanceSched', {
    title: 'ApexCare Solutions', user: {
      name: 'John Doe',
    }
  });
});

module.exports = router;
