var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('ScheduledJobs', {
    title: 'Scheduled Jobs', user: {
      name: 'John Doe',
    }
  });
});

module.exports = router;
