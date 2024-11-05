var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('JobAssignment', {
    title: 'Task Assignment', user: {
      name: 'John Doe',
    }
  });
});

module.exports = router;
