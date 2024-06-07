const router = require('express').Router();
const gameRoute = require('./game');

router.use('/game', gameRoute);

module.exports = router;
