const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT || 3001,
  }
);

module.exports = sequelize;
// // This file is responsible for creating and exporting the Sequelize instance, which is used to interact with your PostgreSQL database.