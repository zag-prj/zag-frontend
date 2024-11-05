var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('CurrentClients', {
    title: 'Current Clients', user: {
      name: 'John Doe',
    }
  });
});

module.exports = router;
