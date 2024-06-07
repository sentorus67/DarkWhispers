const express = require('express');
const router = express.Router();

// Import your individual route files here
const authRoutes = require('./authRoutes');
const gameRoutes = require('./gameRoutes');
const adminRoutes = require('./adminRoutes');
const homeRoutes=require('./homeRoutes');
const apiRoutes = require('./api');

// Use the routes
router.use('/',homeRoutes);
router.use('/auth', authRoutes);
router.use('/game', gameRoutes);
router.use('/admin', adminRoutes);
router.use('/api', apiRoutes);

module.exports = router;
