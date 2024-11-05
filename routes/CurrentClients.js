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
  async function Clients(params) {

    const response = await axios.get(
      `/api/client/${req.params.id}`
  );
  return response.data;
    
  }
  res.render('CurrentClients', {
    title: 'Current Clients', user: Clients()
  });
});

module.exports = router;
