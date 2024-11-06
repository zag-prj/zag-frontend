const express = require('express');
const router = express.Router();
const axios = require('axios');

// Route to render the service history page
router.get('/', function(req, res) {
  const clientId = req.user.id;  // Assume you have clientId available from the user session
  res.render('servicehistory', { title: 'Current Services & Service History', clientId });
});

// API route to get current services for a specific client
router.get('/api/servicehistory/:id', async function(req, res) {
  const clientId = req.params.id;
  const technicianId = 'someTechnicianId'; // You need to determine how to get technicianId
  
  try {
    // GET request to fetch the current services for the client and technician
    const response = await axios.get(`http://localhost:8080/api/job/${clientId}/${technicianId}`);
    const currentServices = response.data.filter(job => job.state === 1); // Assuming '1' is the state for active jobs
    
    res.json(currentServices); // Send the fetched data as a JSON response
  } catch (error) {
    console.error('Error fetching current services:', error);
    res.status(500).json({ message: 'Error fetching current services' });
  }
});

// API route to get service history for a specific client
router.get('/api/service-history/:id', async function(req, res) {
  const clientId = req.params.id;
  const technicianId = 'someTechnicianId'; // Again, determine how to fetch technicianId
  
  try {
    // GET request to fetch service history (completed jobs)
    const response = await axios.get(`http://localhost:8080/api/job/${clientId}/${technicianId}`);
    const serviceHistory = response.data.filter(job => job.state === 3); // Assuming '3' is the state for completed jobs
    
    res.json(serviceHistory); // Send the fetched data as a JSON response
  } catch (error) {
    console.error('Error fetching service history:', error);
    res.status(500).json({ message: 'Error fetching service history' });
  }
});

module.exports = router;
