const router = require('express').Router();
const { Game } = require('../models');

// GET all games
router.get('/', async (req, res) => {
  try {
    const gameData = await Game.findAll();
    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new game
router.post('/', async (req, res) => {
  try {
    const newGame = await Game.create(req.body);
    res.status(200).json(newGame);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
