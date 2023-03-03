var express = require('express');
var router = express.Router();
var server = require(__dirname + '/server');
router.use('/server', server);
module.exports = router;