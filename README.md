# CHAT APPLICATION

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: AMAN KUMAR

*INTERN ID*: CT04DM776

*DOMAIN*: Full Stack Web Development

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

I am Aman Kumar, with the expert guidance of mentor Neela Santosh from CODTECH IT SOLUTIONS, has developed a cutting-edge real-time chat application using Socket.IO. This project leverages WebSockets to enable seamless and instant communication, ensuring a responsive and efficient messaging experience. By implementing robust features and optimizing real-time data exchange, Aman has demonstrated strong technical expertise in modern web development. His work showcases innovation, scalability, and a commitment to delivering reliable user interactions in dynamic web applications.

<h1>Example code </h1>
```javascript
Index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Socket.IO Chat</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="chat-container">
        <div class="chat-header">
            <h2>Socket.IO Chat</h2>
        </div>
        <div class="chat-messages" id="messages"></div>
        <div class="chat-form">
            <input type="text" id="message" placeholder="Type your message..." autocomplete="off">
            <button id="send">Send</button>
        </div>
    </div>

    <script src="/socket.io/socket.io.js"></script>
    <script>
        const socket = io();
        
        // DOM elements
        const messageInput = document.getElementById('message');
        const sendButton = document.getElementById('send');
        const messagesDiv = document.getElementById('messages');
        
        // Send message
        sendButton.addEventListener('click', () => {
            const message = messageInput.value;
            if(message.trim()) {
                socket.emit('chatMessage', message);
                messageInput.value = '';
            }
        });
        
        // Send message on Enter key
        messageInput.addEventListener('keypress', (e) => {
            if(e.key === 'Enter') {
                sendButton.click();
            }
        });
        
        // Listen for messages
        socket.on('message', (msg) => {
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = msg;
            messagesDiv.appendChild(messageElement);
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        });
    </script>
</body>
</html>
```


<div class="weather-icon">
      <img src="https://github.com/Amansinha110/Chat-Application-socket.io/blob/master/Screenshot%202025-05-15%20042019.png" alt="Weather-webpage">
</div>




```javascript
style.css
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

.chat-container {
    width: 400px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.chat-header {
    background-color: #007bff;
    color: white;
    padding: 15px;
    text-align: center;
}

.chat-messages {
    height: 400px;
    padding: 20px;
    overflow-y: auto;
}

.message {
    margin-bottom: 10px;
    padding: 8px 12px;
    background-color: #e9ecef;
    border-radius: 4px;
}

.chat-form {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ddd;
}

.chat-form input {
    flex: 1;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-right: 10px;
}

.chat-form button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.chat-form button:hover {
    background-color: #0056b3;
}
```
