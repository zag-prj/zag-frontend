var express = require('express');
var router = express.Router();

// Render the login page
router.get('/', (req, res) => {
  res.render('login', { title: 'Login' });
});

// Handle login form submission
// router.post('/', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Check if user exists
//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     // Validate password
//     const isMatch = await user.comparePassword(password);
//     if (!isMatch) {
//       return res.status(401).json({ message: 'Invalid email or password' });
//     }

//     // If login is successful, create a session or token
//     req.session.userId = user._id; // For session-based authentication
//     // Alternatively, generate a JWT token if you're using token-based authentication

//     res.redirect('/dashboard'); // Redirect to a protected route
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

module.exports = router;
