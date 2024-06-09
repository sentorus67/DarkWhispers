const router = require('express').Router();
const { Game } = require('../../models');
const gameController = require('../../controllers/gameController');

// GET current scenario for a user
router.get('/scenario', gameController.getCurrentScenario);

// POST update game state based on user choice
router.post('/scenario', gameController.updateGameState);

module.exports = router;
