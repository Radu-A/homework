const express = require('express');

// Initialize express
const app = express();
const port = 3000;

// Set localhost
const server = app.listen(port, () => {
    console.log(`****Your host is: http://localhost${port}`);
})

module.exports = server;