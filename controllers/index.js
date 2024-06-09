const express = require('express');
const router = express.Router();

// Import your individual route files here
const homeRoutes=require('./homeRoutes');
const apiRoutes = require('./api');

// Use the routes
router.use('/',homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
