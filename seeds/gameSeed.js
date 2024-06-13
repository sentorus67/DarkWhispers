const { Game } = require('../models');

const seedGames = async () => {
  await Game.bulkCreate([
    {
      id: 1,
      title: 'Dark Forest Adventure',
      genre: 'Adventure',
      // release_date: '2023-01-01', // Ensure a valid release date is provided
    },
    {
      id: 2,
      title: 'Mystic Quest',
      genre: 'Adventure',
      // release_date: '2023-02-01', // Ensure a valid release date is provided
    },
    {
      id: 3,
      title: 'Mystic TEST',
      genre: 'Adventure',
      // release_date: '2023-03-01', // Ensure a valid release date is provided
    },
  ], {
    ignoreDuplicates: true // In case the games already exist, ignore the duplicate entries
  });
};

module.exports = seedGames;
