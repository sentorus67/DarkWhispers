const sequelize = require('../config/connection');
const seedUsers = require('./userSeed');
const seedGames = require('./gameSeed');
const seedScenarios = require('./scenarioSeed');
const seedGameStates = require('./gameStateSeed');
const seedItems = require('./itemSeed');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log('Database synced');

    await seedUsers();
    console.log('Users seeded');

    await seedGames();
    console.log('Games seeded');

    await seedScenarios();
    console.log('Scenarios seeded');

    await seedItems();
    console.log('Items seeded');

    await seedGameStates();
    console.log('Game States seeded');

    process.exit(0);
  } catch (error) {
    console.error('Error during seeding:', error);
    process.exit(1);
  }
};

seedAll();
