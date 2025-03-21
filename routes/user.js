const { Router } = require('express');
const { getUserById } = require('../controller/userController.js');

const userRouter = Router();

userRouter.get('/:userId', getUserById);

module.exports = userRouter;
