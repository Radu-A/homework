const express = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = express.Router();

// http://localhost:3000/api/projects
usersRouter.get('/?', usersController.getUsers);
usersRouter.post('/', usersController.createUser);
usersRouter.delete('/', usersController.deleteUser);

module.exports = usersRouter;