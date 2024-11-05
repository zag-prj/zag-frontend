var express = require('express');
var router = express.Router();

// GET request to render the service scheduling page
router.get('/', function(req, res, next) {
  res.render('sersched', { title: 'Schedule a Service' });
});

// POST request to handle service scheduling
router.post('/api/schedule-service', async (req, res) => {
  const { serviceType, date, time, name, email, phone, comments } = req.body;

  // Here, you would typically save the service scheduling request to a database
  // For demonstration, we'll just log it and respond with a success message
  console.log('Service scheduling request submitted:', {
    serviceType,
    date,
    time,
    name,
    email,
    phone,
    comments,
  });
  
  res.json({ message: 'Service scheduling request submitted successfully!' });
});

module.exports = router;
