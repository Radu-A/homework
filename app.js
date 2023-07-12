// Require express
const express = require('express');

// Initialize express
const app = express();
const port = 3000;

// Routes modules
const usersRouter = require('./routes/usersRoutes');
const projectsRouter = require('./routes/projectsRoutes');

// Middlewares
app.use(express.json());
app.use('/api/users', usersRouter);
app.use('/api/projects', projectsRouter);

// Set localhost
const server = app.listen(port, () => {
    console.log(`****Your host is: http://localhost${port}`);
})

module.exports = server;