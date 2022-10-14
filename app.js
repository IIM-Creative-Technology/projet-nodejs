#!/usr/bin/env node

/**
 * Module dependencies.
 */
 var http = require('http');
var express = require('express');
var path = require('path');
const { Server } = require("socket.io");

var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var joinRouter = require('./routes/joingame');

var app = express();

/**
  * Get port from environment and store in Express.
  */
 
 var port = "3000";
 app.set('port', port);
 
 /**
  * Create HTTP server.
  */
var server = http.createServer(app);
const io = new Server(server, { 
    cors: {
        origin: "*",
    }
});


io.on("connection", (socket) => {
    console.log("new connection");
    socket.on('newUser', (msg) => {
        console.log('username: ' + msg);
      });
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'testfront')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/joingame', joinRouter);

server.listen(port, () => {
    console.log("listening to port 3000")
})

//module.exports = app;
