var express = require('express');
var router = express.Router();

// GET route to render the contract management page
router.get('/', async function(req, res, next) {
  try {
    const contracts = await Contract.find(); // Fetch contracts from the database
    res.render('contractmanag', { 
      title: 'Contract Management', 
      contracts // Pass the contracts to the template
    });
  } catch (error) {
    console.error('Error fetching contracts:', error);
    res.status(500).send('Error retrieving contracts');
  }
});

// POST route to renew a contract
router.post('/renew/:id', async function(req, res) {
  const contractId = req.params.id;
  try {
    await Contract.findByIdAndUpdate(contractId, { renewed: true }); // Update contract status
    res.redirect('/contractmanag'); // Redirect to contract management page
  } catch (error) {
    console.error('Error renewing contract:', error);
    res.status(500).send('Error renewing contract');
  }
});

module.exports = router;