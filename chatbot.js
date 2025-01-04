// Array of valid passwords
const validPasswords = ['DEALABS', '4568', '4444'];
const pingSound = document.getElementById('pingSound');

function simulateTyping(response, delay = 1000) {
    const chatBody = document.getElementById('chatBody');

    chatBody.innerHTML += `<div class="bot-message typing">...</div>`;
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
        const typingIndicator = document.querySelector('.typing');
        if (typingIndicator) typingIndicator.remove();

        chatBody.innerHTML += `<div class="bot-message">${response}</div>`;
        pingSound.play();
    }, delay);
}

// Function to send message
function sendMessage() {
    const input = document.getElementById('userInput').value.trim();
    const chatBody = document.getElementById('chatBody');

    if (input === "") return;

    // Display user message
    chatBody.innerHTML += `<div class="user-message">${input}</div>`;

    // Get the bot's response
    const response = getResponse(input);
    chatBody.innerHTML += `<div class="bot-message">${response}</div>`;

    // Auto-scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;

    // Open URL if input starts with "open"
    if (input.toLowerCase().startsWith("open ")) {
        const url = input.split(" ")[1];
        window.open(url, '_blank');
    }

    // Check if the user is requesting keys
    if (input.toLowerCase() === "i need keys") {
        chatBody.innerHTML += `<div class="bot-message">Please enter the password:</div>`;
        document.getElementById('password-prompt').style.display = 'block'; // Show password input prompt
    }

    document.getElementById('userInput').value = '';
}

// Function to validate the password entered by the user
function validatePassword() {
    const passwordInput = document.getElementById('password-input').value.trim();
    const chatBody = document.getElementById('chatBody');

    if (validPasswords.includes(passwordInput)) {
        // Correct password
        chatBody.innerHTML += `<div class="bot-message">Access granted. Here is your key: <span id="key">jdjdjxisisjsjj4ieieusjz8</span></div>`;
        chatBody.innerHTML += `<button onclick="copyToClipboard()">Copy Key</button>`;
        document.getElementById('password-prompt').style.display = 'none'; // Hide the password input prompt
    } else {
        // Incorrect password
        chatBody.innerHTML += `<div class="bot-message">Incorrect token. Please try again.</div>`;
    }

    // Clear password input
    document.getElementById('password-input').value = '';
}

// Function to copy the key to clipboard
function copyToClipboard() {
    const keyElement = document.getElementById('key');
    const range = document.createRange();
    range.selectNode(keyElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    alert("Key copied to clipboard!");
}

// Function to get the bot's response
function getResponse(input) {
    // You can add more conditions here for other responses
    return "How can I help you?";
}