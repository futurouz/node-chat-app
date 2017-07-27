const express = require('express');
const http = require('http');
const path = require('path');
const socketIO = require('socket.io')

const publicPaht = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPaht));

io.on('connection', (socket) => {
    console.log('New user connected');

    socket.emit('newMessage', {
        from: "Kunanan",
        text: "Hey, how is going?"
    });

    socket.on('createMessage', (message) => {
        console.log(message)
    });

    // socket.emit('newEmail', {
    //     from: "kunanan@mail.com",
    //     text: "Why everything so heavy",
    //     createAt: 123
    // });

    // socket.on('createEmail', (email) => {
    //     console.log(email)
    // });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })
});


server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});

