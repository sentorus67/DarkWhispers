// routes/scenarioRoutes.js
const express = require('express');
const router = express.Router();
const scenarioController = require('../scenarioController');

router.get('/:id', scenarioController.getScenarioById);
router.post('/', scenarioController.createScenario);
router.put('/:id', scenarioController.updateScenario);
// Uncomment if delete functionality is needed
// router.delete('/:id', scenarioController.deleteScenario);

module.exports = router;
