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


let users = {}

io.on("connection", (socket) => {    
    console.log("new connection")

    const updateUserList = () => {
        io.sockets.emit('updateUsers', users)
    }

    socket.on('newUser', (pseudo) => {
        socket.username = pseudo
        users[pseudo] = pseudo
        console.log("joined :", socket.username)
        updateUserList()

    
    })
    socket.on('disconnect', () => {
        if (socket.username) {
            console.log("disconnected : ", socket.username)
            socket.broadcast.emit("disconnected", socket.username)
            delete users[socket.username]
            updateUserList()
        }

        
    })
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/joingame', joinRouter)

server.listen(port, () => {
    console.log("listening to port 3000")
})

//module.exports = app;
