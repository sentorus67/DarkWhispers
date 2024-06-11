const router = require('express').Router();
const express = require('express');


const authRoutes = require('./authRoutes');
const gameRoutes = require('./gameRoutes');
const adminRoutes = require('./adminRoutes');

// Route: /api/

router.use('/auth', authRoutes);
router.use('/game', gameRoutes);
router.use('/admin', adminRoutes);

module.exports = router;
