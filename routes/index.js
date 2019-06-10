var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log('Hit to root!')
  res.redirect('/electionresults')
});

module.exports = router;
