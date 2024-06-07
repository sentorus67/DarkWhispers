const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

class Scenario extends Model {}

Scenario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    choices: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'scenario',
  }
);

module.exports = Scenario;
