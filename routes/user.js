const express = require('express');
const router = express.Router();
const controller = require('../controller/userController.js');

router.get('/:id', controller.get);

module.exports = router;
