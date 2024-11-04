var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('support', { title: 'Support' });
});
router.post('/api/support', function(req, res) {
  const { issueType, description, name, email, phone } = req.body;
  console.log('Support Request:', {
    issueType,
    description,
    name,
    email,
    phone,
  });
  res.redirect('/support');
});
module.exports = router;
