
var express = require('express');
var path = require('path');
var bodyParser      = require('body-parser')
var logger = require('winston');
var config = require('./config');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');

var app = express();

// Middleware Settings
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'webapp')));
app.use("/resources",express.static(__dirname + '/resources'));
console.log(__dirname);
/* GET home page. */
app.get('/', function(req, res, next) {    
    res.sendFile('index.html');
  });

// Mongoose Connection
mongoose.Promise = global.Promise;
mongoose.connect(config.database);
var  database = mongoose.connection;

// Mongoose Checker
database.on('connected', () => logger.info('Mongoose conectado'));
database.on('disconnected', () => logger.info('Mongoose desconectado'));
database.on('error', error => logger.info(`Mongoose erro de conexão: ${error}`));

// Routers
app.use('/', indexRouter);

module.exports = app;
