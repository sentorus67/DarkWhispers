const express = require('express');
const router = express.Router();
const gameController = require('../../controllers/gameController');
const ensureUser = require('../../middleware/authMiddleware');

// Route: /api/game/

// Ensure the controller functions are correctly defined
router.get('/current-scenario', gameController.getCurrentScenario);
router.post('/update-game-state', gameController.updateGameState);
router.get('/', gameController.renderGamePage);

module.exports = router;
