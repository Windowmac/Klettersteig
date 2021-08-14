const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class Times extends Model {}

Times.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    hours: {
      type: DataTypes.INTEGER,
    },
    minutes: {
      type: DataTypes.INTEGER,
      validate: {
        max: 60,
        min: 0,
      },
    },
    seconds: {
      type: DataTypes.INTEGER,
      validate: {
        max: 60,
        min: 0,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: false,
      },
    },
    hike_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'hike',
        key: 'id',
        unique: false,
      },
    },
  },
  { sequelize, modelName: 'times', timestamps: false }
);

module.exports = Times;
