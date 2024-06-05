const express = require('express');
const router = express.Router();
const authController = require('./authController'); // Correct path to authController

// Define your auth routes here
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;
