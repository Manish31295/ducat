const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')

router.post('/createUser', userController.createUser)

router.get('/getAllUser', userController.getAllUser)

module.exports = router;