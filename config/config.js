require('dotenv').config();
const sequelize = require('./sequelize');

const dbConfig = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
   sequelize, // Export the connection instance
};

module.exports = dbConfig;

// This file organizes the configuration settings for different environments (development and production). It imports the Sequelize instance from sequelize.js and includes environment-specific configurations.