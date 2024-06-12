const router = require('express').Router();
const scenarioController = require('../../controllers/scenarioController');
const ensureAdmin = require('../../middleware/adminMiddleware');
const { User } = require('../../models');

// Protect all admin routes with ensureAdmin middleware
// router.use(ensureAdmin);

// Route: /api/admin/
router.get('/users', async (req, res) => {
    try {
        const users = await User.findAll();
       
        res.render('./partials/admin', {
            users: users.map(user => user.get({ plain: true })),

      
          });
    }  catch (err) {
    res.status(500).json(err);

    }
});


router.post('/create', scenarioController.createScenario);
router.put('/update/:id', scenarioController.updateScenario);
// router.delete('/delete/:id', scenarioController.deleteScenario);

module.exports = router;
