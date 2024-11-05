var express = require("express");
var router = express.Router();

// Render the feedback page
router.get('/', function(req, res, next) {
  res.render('feedback', { title: 'Customer Feedback' });
});

// Handle feedback submissions
router.post('/api/feedback', async (req, res) => {
  const { serviceRating, comments, name, email } = req.body;

  // Here, you would typically save the feedback to a database
  // For demonstration, we'll just log it and respond with a success message
  console.log('Feedback submitted:', {
      serviceRating,
      comments,
      name,
      email,
  });

  // Respond with a success message
  res.json({ message: 'Feedback submitted successfully!' });
});

module.exports = router;
