const express = require('express');
const router = express.Router();
const axios = require('axios');

// Route to render the service history page
router.get('/', function(req, res) {
  const clientId = req.user.id; 
  res.render('servicehistory', { title: 'Current Services & Service History', clientId });
});

// API route to get current services for a specific client
router.get('/api/servicehistory/:clientId', async function(req, res) {
  const clientId = req.params.clientId;

  try {
    // GET request to fetch current services
    const response = await axios.get(`/api/job/${clientId}/technicianId`);
    res.json(response.data); // Send the fetched data as a JSON response
  } catch (error) {
    console.error('Error fetching current services:', error);
    res.status(500).json({ message: 'Error fetching current services' });
  }
});

// API route to get service history for a specific client
router.get('/api/service-history/:clientId', async function(req, res) {
  const clientId = req.params.clientId;

  try {
    // GET request to fetch service history
    const response = await axios.get(`/api/job/${clientId}/technicianId`);
    res.json(response.data); // Send the fetched data as a JSON response
  } catch (error) {
    console.error('Error fetching service history:', error);
    res.status(500).json({ message: 'Error fetching service history' });
  }
});

module.exports = router;
