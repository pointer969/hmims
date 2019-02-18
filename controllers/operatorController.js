var mongoose            = require('mongoose')
var Operator            = require('../models/operator')

var operatorController = {}

// CRUD
operatorController.list = function (req, res) {    
  var page = (req.query.page > 0 ? req.query.page : 1) - 1;
  var limit = 10;
 
  Operator.find()
      .limit(limit)
      .skip(limit * page).exec(function(err, operators){
        res.send(operators);
      })
 }

 module.exports = operatorController