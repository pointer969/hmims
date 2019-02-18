var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('winston');
var config = require('./config');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


mongoose.Promise = global.Promise;
mongoose.connect(config.database);
var  database = mongoose.connection;

database.on('connected', () => logger.info('Mongoose conectado'));
database.on('disconnected', () => logger.info('Mongoose desconectado'));
database.on('error', error => logger.info(`Mongoose erro de conexão: ${error}`));


app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
