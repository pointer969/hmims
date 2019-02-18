
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('winston');
var config = require('./config');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');

var app = express();

// Middleware Settings
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
