const router = require('express').Router();
const scenarioController = require('../../controllers/scenarioController');
const { User } = require('../../models');

// Route: /api/admin/
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.render('./partials/admin', {
            users: users.map(user => user.get({ plain: true })),
        });
    } catch (err) {
        res.status(500).json(err);

    }
});

router.post('/create', scenarioController.createScenario);
// router.put('/update/:id', scenarioController.updateScenario);
// router.delete('/delete/:id', scenarioController.deleteScenario);

module.exports = router;
