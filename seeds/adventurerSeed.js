const { Adventurer } = require('../models');

const seedAdventurers = async () => {
  await Adventurer.bulkCreate([
    {
      user_id: 1,
      game_id: 1,
      scenario_id: 1,
      name: 'Torbjorn',
      has_key_item1: false,
      has_key_item2: false,
      has_key_item3: false,
    },
    {
      user_id: 2,
      game_id: 1,
      scenario_id: 1,
      name: 'Mikaelis',
      has_key_item1: false,
      has_key_item2: false,
      has_key_item3: false,
    },
    {
      user_id: 3,
      game_id: 1,
      scenario_id: 1,
      name: 'Reginald',
      has_key_item1: false,
      has_key_item2: false,
      has_key_item3: false,
    },
  ], {
    ignoreDuplicates: true // In case the adventurers already exist, ignore the duplicate entries
  });
};

module.exports = seedAdventurers;
