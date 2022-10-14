var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
    const body = req.body
    console.log(body)
    res.json('done')
});

module.exports = router;
