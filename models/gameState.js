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
        model: 'users',
        key: 'id',
      },
    },
    current_scenario_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'scenarios',
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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gameState',
    tableName: 'game_states',  // Ensure the table name is 'game_states'
  }
);

module.exports = GameState;
