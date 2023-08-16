const express = require('express');
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');
const authRouter = express.Router();

authRouter.post('/login', authMiddleware.checkEmailAndPassword, authController.getToken);

module.exports = authRouter;