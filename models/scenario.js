const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Scenario extends Model {}

Scenario.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    game_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'game',
        key: 'id'
      },
      onDelete: 'CASCADE',
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    key_item: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    choices: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'scenario',
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = Scenario;
