var express = require('express');
var router = express.Router();

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
