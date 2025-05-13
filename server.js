const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

// Serve static files from client directory
app.use(express.static(path.join(__dirname, 'client')));

// Socket.IO connection handling
io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('user joined', (username) => {
        console.log(`${username} joined the chat`);
    });

    socket.on('chat message', (data) => {
        io.emit('chat message', data);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});