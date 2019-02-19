var express = require('express');
var router = express.Router();
var Operator = require('../controllers/operatorController')

/* GET Operator. */
router.get('/operators', Operator.list);

module.exports = router;
