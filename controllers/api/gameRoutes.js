const router = require('express').Router();
const gameController = require('../../controllers/gameController');
const ensureUser = require('../../middleware/authMiddleware');

// Route: /api/game/

// GET current scenario for a authenticated user
router.get('/scenario', ensureUser, gameController.getCurrentScenario);


module.exports = router;
