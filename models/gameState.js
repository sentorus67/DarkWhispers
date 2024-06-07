const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GameState extends Model {}

GameState.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    current_scenario_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'scenario',
        key: 'id',
      },
    },
    state: {
      type: DataTypes.JSONB,
      allowNull: false,
    },
    last_updated: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: 'gameState',
    timestamps: false,
    freezeTableName: true,
    underscored: true,
  }
);

module.exports = GameState;
