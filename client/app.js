const socket = io();
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messagesDiv = document.getElementById('messages');
const joinForm = document.getElementById('join-form');
const usernameInput = document.getElementById('username-input');

let username = '';

joinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    username = usernameInput.value.trim();
    if (username) {
        joinForm.style.display = 'none';
        messageForm.style.display = 'block';
        socket.emit('user joined', username);
    }
});

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value.trim();
    if (message) {
        socket.emit('chat message', {
            username,
            message
        });
        messageInput.value = '';
    }
});

socket.on('chat message', (data) => {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `
        <div class="meta">${data.username}</div>
        <div class="text">${data.message}</div>
    `;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
});

// Hide message form initially
messageForm.style.display = 'none';