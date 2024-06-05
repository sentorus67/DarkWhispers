const Sequelize = require('sequelize');
const { sequelize } = require('../config/config');

const Game = require('./Game');

const models = {
  Game,
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
