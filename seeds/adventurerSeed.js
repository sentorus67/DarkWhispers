const { Adventurer } = require('../models');

const seedAdventurers = async () => {
  await Adventurer.bulkCreate([
    {
      user_id: 1,
      game_id: 1,
      scenario_id: 1, // Ensure this scenario_id exists in the scenarios table
      name: 'Torbjorn',
    },
    {
      user_id: 2,
      game_id: 1,
      scenario_id: 1, // Ensure this scenario_id exists in the scenarios table
      name: 'Mikaelis',
    },
    {
      user_id: 3,
      game_id: 1,
      scenario_id: 1, // Ensure this scenario_id exists in the scenarios table
      name: 'Reginald',
    },
  ], {
    ignoreDuplicates: true
  });
};

module.exports = seedAdventurers;
