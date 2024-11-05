var express = require("express");
var router = express.Router();
var path = require("path"); // Import the path module

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("MainEmp", { title: "Dashboard" });
});

module.exports = router;
