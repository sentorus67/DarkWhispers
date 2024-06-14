const sequelize = require('./config/connection');

const syncDatabase = async () => {
  try {
    await sequelize.sync({ force: true }); // Use { force: true } to drop and recreate the database tables, if necessary
    console.log('Database synced');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
};

syncDatabase();
