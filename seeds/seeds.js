const sequelize = require('../config/connection');
const seedUsers = require('./userSeed');
const seedGames = require('./gameSeed');
const seedScenarios = require('./scenarioSeed');
const seedAdventurers = require('./adventurerSeed');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('Database synced');

  await seedUsers();
  console.log('Users seeded');

  await seedGames();
  console.log('Games seeded');

  await seedScenarios();
  console.log('Scenarios seeded');

  await seedAdventurers();
  console.log('Adventurers seeded');

  process.exit(0);
};

seedAll();
