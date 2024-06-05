const express = require('express');
const router = express.Router();

// Import your individual route files here
const authRoutes = require('./authRoutes');
const gameRoutes = require('./gameRoutes');
const adminRoutes = require('./adminRoutes');

// Use the routes
router.use('/auth', authRoutes);
router.use('/game', gameRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
