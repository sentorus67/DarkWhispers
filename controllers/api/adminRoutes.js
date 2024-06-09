const router = require('express').Router();
const scenarioController = require('../../controllers/scenarioController');
const ensureAdmin = require('../../middleware/authMiddleware');

// Protect all admin routes with ensureAdmin middleware
router.use(ensureAdmin);

// Define your admin routes here
router.post('/create', scenarioController.createScenario);
router.put('/update/:id', scenarioController.updateScenario);
router.delete('/delete/:id', scenarioController.deleteScenario);

module.exports = router;
