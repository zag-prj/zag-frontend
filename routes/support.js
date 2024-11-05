var express = require('express');
var router = express.Router();

// Render the support page
router.get('/', function(req, res, next) {
  res.render('support', { title: 'Support' });
});

// Handle support request submissions
router.post('/api/support-request', async (req, res) => {
  const { issueType, description, name, email, phone } = req.body;

  // Here, you would typically save the support request to a database
  // For demonstration, we'll just log it and respond with a success message
  console.log('Support request submitted:', {
      issueType,
      description,
      name,
      email,
      phone,
  });

  // Respond with a success message
  res.json({ message: 'Support request submitted successfully!' });
});

module.exports = router;
