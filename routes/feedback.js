var express = require("express");
var router = express.Router();

// Render the feedback page
router.get('/', function(req, res, next) {
  res.render('feedback', { title: 'Customer Feedback' });
});

// Handle feedback submissions
router.post('/api/feedback', async (req, res) => {
  const { serviceRating, comments, name, email, clientId } = req.body;

  // Validate that the necessary fields are present
  if (!serviceRating || !comments || !clientId) {
    return res.status(400).send({ message: 'Service rating, comments, and client ID are required.' });
  }

  // Construct the data to send to the /api/contact endpoint
  const feedbackData = {
    clientId: clientId,
    name: name || '', 
    surname: '', 
    phoneNumber: '', 
    email: email || '' 
  };

  try {
    // Send the feedback data to the /api/contact endpoint
    const response = await axios.post('http://localhost:8080/api/contact', feedbackData);
    
    // Log the feedback data
    console.log('Feedback submitted:', response.data);

    // Send success response
    res.status(200).send({ message: 'Feedback submitted successfully!' });
  } catch (error) {
    console.error('Error submitting feedback:', error);
    res.status(500).send({ message: 'Failed to submit feedback. Please try again later.' });
  }
});

module.exports = router;
