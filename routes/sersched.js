var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('sersched', { title: 'Schedule a Service' });
});
router.post('/api/schedule-service', function(req, res) {
  const { serviceType, date, time, name, email, phone, comments } = req.body;
  if (!serviceType || !date || !time || !name || !email || !phone) {
    return res.json({ success: false, message: 'All fields are required.' });
  }
  res.json({ success: true, message: 'Service scheduled successfully!' });
});
module.exports = router;
