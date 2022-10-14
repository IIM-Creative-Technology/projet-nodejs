var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');


/* GET home page. */
router.post('/', function(req, res, next) {
  
  res.json({'msg': req.body})
});

module.exports = router;
