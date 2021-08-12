const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class Hike extends Model {}

Hike.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    discovered_by: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: true,
      },
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    length: {
        type: DataTypes.DECIMAL,
    },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize, modelName: 'hike', freezeTableName: true },
);

module.exports = Hike;
