const express = require('express');
const router = express.Router();
const gameController = require('./gameController'); // Ensure this file exists

// Define your game routes here
router.get('/state', gameController.getState);
router.post('/state', gameController.saveState);
router.get('/scenario/:id', gameController.getScenario);

module.exports = router;
