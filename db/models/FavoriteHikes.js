const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class FavoriteHikes extends Model {}

FavoriteHikes.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
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
    hike_name: {
      type: DataTypes.STRING,
    }
  },
  { sequelize, modelName: 'favorite_hikes', timestamps: false }
);

module.exports = FavoriteHikes;
