const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const db = {};

// Import models
db.User = require('./user');
db.Game = require('./game');
db.Scenario = require('./scenario');
db.GameState = require('./gameState');

// Create associations
db.User.hasMany(db.GameState, {
    foreignKey: 'user_id'
});

db.GameState.belongsTo(db.User, {
    foreignKey: 'user_id'
});

db.Game.hasMany(db.Scenario, {
    foreignKey: 'game_id'
});

db.Scenario.belongsTo(db.Game, {
    foreignKey: 'game_id'
});

db.Scenario.hasMany(db.GameState, {
    foreignKey: 'current_scenario_id'
});

db.GameState.belongsTo(db.Scenario, {
    foreignKey: 'current_scenario_id'
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
