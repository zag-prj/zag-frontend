var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('ScheduledJobs', { title: 'Scheduled Jobs' });
});

module.exports = router;
