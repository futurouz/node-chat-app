var socket = io()

socket.on('connect', function () {
    console.log('Connected to server');
});

socket.on('disconnect', function () {
    console.log('Disconnect from server')
});

socket.on('newMessage', function (message) {
    console.log(message)
});


// socket.on('newEmail', function (email) {
//     console.log('New email', email)
// });