const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// const env = process.env.NODE_ENV || 'development';
// const dbConfig = config[env];
// const sequelize = config.sequelize; // Use the exported sequelize instance

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import models here
db.User = require('./user');
db.Game = require('./Game');
db.Scenario = require('./scenario');

// Optionally, create associations here
if (db.User.associate) {
  db.User.associate(db);
}

if (db.Game.associate) {
  db.Game.associate(db);
}

if (db.Scenario.associate) {
  db.Scenario.associate(db);
}

module.exports = db;
