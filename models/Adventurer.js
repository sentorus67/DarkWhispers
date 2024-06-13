const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Adventurer extends Model {}

Adventurer.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    scenario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hasKeyItem1: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hasKeyItem2: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    hasKeyItem3: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'adventurer',
  }
);

module.exports = Adventurer;
