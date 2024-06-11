const express = require('express');
const router = express.Router();
const { Game, Scenario, User } = require('../models');
const withAuth = require('../utils/auth')
const ensureAdmin = require('../middleware/adminMiddleware')

// Render homepage
router.get('/', async (req, res) => {
  try {

    const games = await Game.findAll();

    res.render('./partials/game', {
      games: games.map(game => game.get({ plain: true })),

    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render login page
router.get('/login', async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/game');
      return;
    } else{
    res.render('./partials/login');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render register page
router.get('/register', async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/game');
      return;
    }
    res.render('./partials/register');
  } catch (err) {
    res.status(500).json(err);
  }
});

//can delete bypass once testing is done
router.get('/bypass', async (req, res) => {
  try {
    res.render('./partials/game', {
      loggedIn: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render game page
router.get('/game', /**withAuth,*/ async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect('/game');
      return;
    }

    res.render('./partials/scenario');

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/scenario', async (req, res) => {
  try {
    const scenarios = await Scenario.findAll();
    res.status(200).json(scenarios);
  } catch (err) {
    console.error('Error fetching scenarios:', err);
    res.status(200).json({ error: 'Failed to fetch scenarios' });
  }
});


router.get('/scenario/:id', async (req, res) => {
  try {
    const scenarioData = await Scenario.findByPk(req.params.id);
    const scene = scenarioData.get({ plain: true });

    const sceneChoices = JSON.parse(scene.choices);

    res.render('./partials/scenario', {
      loggedIn: true,
      nowPlaying: true,
      scene,
      sceneChoices,
      layout: 'main'  // Handlebars
    });
  }
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Render admin page
router.get('/admin', /**ensureAdmin,*/ async (req, res) => {
  try {
    res.render('./partials/admin');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
