const express = require('express');
const router = express.Router();
const { Game, Scenario, User } = require('../models');
const withAuth = require('../utils/auth');

// Render homepage
router.get('/', async (req, res) => {
  try {
    const games = await Game.findAll({});
    res.render('game', {
      games: games.map(game => game.get({ plain: true })),
      layout: 'main',  // Specify Handlebars layout if needed
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render login page
router.get('/login', async (req, res) => {
  try {
    res.render('login', { layout: 'main' }); // Handlebars
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render register page
router.get('/register', async (req, res) => {
  try {
    res.render('register', { layout: 'main' }); // Handlebars
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render game page
router.get('/game', async (req, res) => {
  try {
    res.render('game', { loggedIn: true, layout: 'main' }); // Handlebars
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/scenario/:id', async (req, res) => {
  try {
    const scenarioData = await Scenario.findByPk(req.params.id);
    const scene = scenarioData.get({ plain: true });
    const sceneChoices = JSON.parse(scene.choices);

    res.render('scenario', {
      loggedIn: true,
      nowPlaying: true,
      scene,
      sceneChoices,
      layout: 'main'  // Handlebars
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Render admin page
router.get('/admin', async (req, res) => {
  try {
    res.render('admin', { layout: 'main' }); // Handlebars
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
