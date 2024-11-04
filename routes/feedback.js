var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('feedback', { title: 'Feedback' });
});

// POST route to submit feedback
router.post('/', async function(req, res) {
  try {
    // Extract data from the form
    const { serviceRating, comments, name, email } = req.body;

    // Save the feedback to the database
    await Feedback.create({
      serviceRating,
      comments,
      name,
      email
    });

    // Send a response back to the client
    res.status(200).send('Feedback submitted successfully');
  } catch (error) {
    console.error('Error saving feedback:', error);
    res.status(500).send('Error submitting feedback');
  }
});

module.exports = router;
