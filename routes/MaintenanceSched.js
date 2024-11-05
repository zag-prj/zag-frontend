var express = require('express');
var router = express.Router();
const axios = require('axios');
 
// Define the API endpoint URL
const apiEndpoint = '/api';
 
// Make a GET request to the API endpoint
axios.get(apiEndpoint)
  .then(response => {
    // Handle the response data
    const data = response.data;
    console.log(data);
  })
  .catch(error => {
 

    // Handle any errors that occur during the request
    console.error('Error fetching data:', error);
  });
router.get('/', function (req, res, next) {
  res.render('MaintenanceSched', {
    title: 'ApexCare Solutions', user: {
      name: 'John Doe',
    }
  });
});

module.exports = router;
