var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mysql = require("mysql");
const myConnection = require("express-myconnection");

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const optionBd = {
    host: "localhost",
    user: "root",
    password: "",
    port: 3307,
    database: "projetnodejs",
  };

app.use(myConnection(mysql, optionBd, "pool"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
