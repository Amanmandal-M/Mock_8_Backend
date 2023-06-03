const express = require('express');
const userRouter = express.Router();

// Controller Location
const { registerController , loginController } = require('../controllers/userController');


// This endpoint is for signup
userRouter.post('/signup', registerController);

// This endpoint is for login 
userRouter.post('/login', loginController);


module.exports = { userRouter }