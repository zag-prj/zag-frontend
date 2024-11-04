var express = require('express');
var router = express.Router();

router.get('/', async function(req, res, next) {
  try {
    // Fetch current services and service history from the database
    const currentServices = await Service.find({ status: { $in: ['In Progress', 'Scheduled'] } });
    const serviceHistory = await Service.find({ status: 'Completed' });

    res.render('servicehistory', { 
      title: 'Current Services & Service History',
      currentServices,
      serviceHistory 
    });
  } catch (error) {
    console.error('Error fetching service data:', error);
    res.status(500).send('Error retrieving service data');
  }
});

module.exports = router;
