// DOM Elements
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeBtn = document.querySelector('.close');
const loginForm = document.getElementById('loginForm');
const registerLink = document.getElementById('registerLink');

// User data storage
const users = JSON.parse(localStorage.getItem('users')) || [];

// Event Listeners
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    loginModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        alert('Welcome back, ' + username + '!');
        localStorage.setItem('currentUser', username);
        loginModal.style.display = 'none';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});

registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (users.some(u => u.username === username)) {
        alert('Username already exists!');
        return;
    }

    users.push({ username, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! Please login.');
});

// Floating wands animation
function createFloatingWand() {
    const wand = document.createElement('div');
    wand.className = 'wand';
    wand.style.cssText = `
        position: absolute;
        width: 50px;
        height: 2px;
        background: rgba(241, 196, 15, 0.6);
        left: ${Math.random() * 100}vw;
        top: ${Math.random() * 100}vh;
        transform: rotate(${Math.random() * 360}deg);
        animation: float ${5 + Math.random() * 5}s linear infinite;
    `;
    document.querySelector('.floating-wands').appendChild(wand);
}

// Create multiple floating wands
for (let i = 0; i < 20; i++) {
    createFloatingWand();
} 