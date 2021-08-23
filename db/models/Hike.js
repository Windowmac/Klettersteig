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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    discovered_by: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    length: {
      type: DataTypes.DECIMAL,
    },
    latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  { sequelize, modelName: 'hike', freezeTableName: true, timestamps: false }
);

module.exports = Hike;
