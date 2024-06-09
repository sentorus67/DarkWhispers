const { GameState, User, Scenario } = require('../models');

const gameStateData = [
  {
    user_id: 1,  // Ensure this user exists in the users table
    // current_scenario_id: 1,  // Ensure this scenario exists in the scenarios table
    state: JSON.stringify({ inventory: [], health: 100 }),
  },
  // Add more game states as needed
];

const seedGameStates = async () => {
  // Ensure the user and scenario exist before seeding the game states
  const user = await User.findByPk(1);
  const scenario = await Scenario.findByPk(1);

  if (user && scenario) {
    await GameState.bulkCreate(gameStateData);
    console.log('Game States seeded');
  } else {
    console.error('Required user or scenario not found. Please check the seeding of users and scenarios.');
  }
};

module.exports = seedGameStates;
