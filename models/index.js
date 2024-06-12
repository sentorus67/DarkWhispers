const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const User = require('./user');
const Game = require('./Game');
const Scenario = require('./scenario');
const GameState = require('./gameState');
const Item = require('./Adventurer');
const Adventurer = require('./Adventurer');

// Create associations
User.hasMany(GameState, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Scenario.hasMany(GameState, {
  foreignKey: 'current_scenario_id',
  onDelete: 'CASCADE',
});

Game.hasMany(Scenario, {
  foreignKey: 'game_id',
  onDelete: 'CASCADE',
});

GameState.belongsTo(User, {
  foreignKey: 'user_id'
});

GameState.belongsTo(Scenario, {
  foreignKey: 'current_scenario_id'
});

Scenario.belongsTo(Game, {
  foreignKey: 'game_id'
});



const db = {
  User,
  Game,
  Scenario,
  GameState,
  Adventurer,
  sequelize,  // Sequelize instance
  Sequelize,  // Sequelize class
};

module.exports = db;
