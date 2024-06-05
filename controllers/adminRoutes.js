const express = require('express');
const router = express.Router();
const adminController = require('./adminController'); // Ensure this file exists

// Define your admin routes here
router.post('/create', adminController.createScenario);
router.put('/update/:id', adminController.updateScenario);
router.delete('/delete/:id', adminController.deleteScenario);

module.exports = router;
