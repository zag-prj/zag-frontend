var express = require('express');
var router = express.Router();
const axios = require('axios'); // Make sure you have axios installed

// Route to render the contract management page
router.get('/', function(req, res, next) {
  res.render('contractmanag', { title: 'Contract Management' });
});

// API route to get contracts for a specific client
router.get('/api/contracts/:clientId', async function(req, res) {
  const clientId = req.params.clientId;

  try {
    const response = await axios.get(`${API_BASE}/api/contracts/${clientId}`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching contracts' });
  }
});

module.exports = router;
