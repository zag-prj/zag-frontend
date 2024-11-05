var express = require('express');
var router = express.Router();
const fetch = require('node-fetch'); // Import node-fetch

// Render the service history page
router.get('/', async function(req, res, next) {
    try {
        // Fetch current services and service history from the API
        const response = await fetch('http://localhost:8080/api/services'); // Update with your API endpoint
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const { currentServices, serviceHistory } = await response.json();
        
        // Render the page with the fetched data
        res.render('servicehistory', { 
            title: 'Current Services & Service History',
            currentServices, 
            serviceHistory 
        });
    } catch (error) {
        console.error('Error fetching service data:', error);
        // Pass a title and error message to the error page
        res.status(500).render('error', { title: 'Error', error: 'Error fetching service data.' });
    }
});

module.exports = router;
