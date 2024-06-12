const { Adventurer, Scenario, Game } = require('../models');

const adventurerData = [
  { 
    user_id: 1,
    game_id:1,
    scenario_id:1,
    name: 'Torbjorn',
    hasKeyItem1:false,
    hasKeyItem2:false,
    hasKeyItem3:false,
  },
  { 
    user_id: 2,
    game_id:1,
    scenario_id:1,
    name: 'Mikaelis',
    hasKeyItem1:false,
    hasKeyItem2:false,
    hasKeyItem3:false,
  },
  { 
    user_id: 3,
    game_id:1,
    scenario_id:1,
    name: 'Reginald',
    hasKeyItem1:false,
    hasKeyItem2:false,
    hasKeyItem3:false,
  },
];

const seedAdventurers = async () => {
    await Adventurer.bulkCreate(adventurerData)
};

module.exports = seedAdventurers;