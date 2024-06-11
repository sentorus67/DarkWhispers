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
      references: {
        model: 'users',
        key: 'id'
      },
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'game',
        key: 'id'
      },
    },
    scenario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'scenario',
        key: 'id'
      },
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
