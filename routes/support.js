var express = require('express');
var router = express.Router();

// Render the support page
router.get('/', function(req, res, next) {
  res.render('support', { title: 'Support' });
});

// Handle support request submissions
router.post('/support', async (req, res) => {
  const { issueType, description, name, email, phone } = req.body;

  try {
      // Send support request data to the API endpoint
      const response = await axios.post(
          `${API_BASE}/api/support-request`, 
          {
              issueType,
              description,
              name,
              email,
              phone
          }
      );

      // Return the API response back to the client
      res.status(response.status).json(response.data);
  } catch (error) {
      if (error.response) {
          // Error from the API
          res.status(error.response.status).json(error.response.data);
      } else {
          // General server error
          res.status(500).json({ error: 'Internal Server Error' });
      }
  }
});

module.exports = router;
