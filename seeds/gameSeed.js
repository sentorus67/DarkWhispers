const { Game } = require('../models');

const seedGames = async () => {
  await Game.create({
    id: 1,
    title: 'Dark Whispers',
    genre: 'Adventure',
    releaseDate: new Date(),
  });
};

module.exports = seedGames;
