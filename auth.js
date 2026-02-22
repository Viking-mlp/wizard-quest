// auth.js

// User Authentication and Account Creation

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const users = []; // In-memory user storage, replace with a database for production.

// Register a new user
const register = (username, password) => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    users.push({ username, password: hashedPassword });
    return { message: 'User registered successfully!' };
};

// Authenticate a user
const authenticate = (username, password) => {
    const user = users.find(u => u.username === username);
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = jwt.sign({ username }, 'secretKey', { expiresIn: '1h' });
        return { token };
    }
    return { message: 'Invalid username or password' };
};

module.exports = { register, authenticate };