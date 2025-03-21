const express = require('express');
const router = express.Router();
const messageController = require('../controller/messageController.js');

router.get('/', messageController.get);

module.exports = router;
