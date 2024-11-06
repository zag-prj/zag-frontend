const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', function(req, res, next) {
  res.render('sersched', { title: 'Schedule a Service' });
});
// Function to get initial data for the scheduling form
async function getInitialData(id) {
    try {
        const response = await axios.get(`/api/client/${id}`);
        console.log('Initial data loaded:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error loading initial data:', error);
        return null;
    }
}

// router.get('/:id', async (req, res) => {
//     const clientId = req.params.id;

//     // Load initial data using the clientId
//     const initialData = await getInitialData(clientId);

//     if (initialData) {
//         // Render the form with initial data for the client
//         res.render('sersched', { clientData: initialData });
//     } else {
//         // If there's an error, render an error page
//         res.status(500).render('error', { message: 'Failed to load scheduling data. Please try again.' });
//     }
// });

// Function to schedule a service by sending a POST request to the API
async function scheduleService(data) {
    try {
        const response = await axios.post('/api/job', data);
        console.log('Service scheduled:', response.data);
        return response.data; 
    } catch (error) {
        console.error('Error scheduling service:', error);
        return null;
    }
}

// Route to handle the form submission from sersched.ejs
router.post('/', async (req, res) => {
    // Extract form data from the request body
    const serviceData = {
      clientId: req.body.clientId,
      serviceType: req.body['service-type'],
      date: req.body.date,
      time: req.body.time,
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      comments: req.body.comments
    };

    // Attempt to schedule the service by calling the scheduleService function
    const scheduleResult = await scheduleService(serviceData);

    if (scheduleResult) {
        res.render('service-confirmation', { message: 'Service scheduled successfully!' });
    } else {
        // If there's an error, render an error page or send a failure response
        res.status(500).render('error', { message: 'Failed to schedule the service. Please try again.' });
    }
});

// Export the router to be used in the main app
module.exports = router;
