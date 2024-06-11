const router = require('express').Router();
const scenarioController = require('../../controllers/scenarioController');
const ensureAdmin = require('../../middleware/adminMiddleware');

// Protect all admin routes with ensureAdmin middleware
// router.use(ensureAdmin);

// Route: /api/admin/

router.post('/create', scenarioController.createScenario);
router.put('/update/:id', scenarioController.updateScenario);
router.delete('/delete/:id', scenarioController.deleteScenario);

module.exports = router;
