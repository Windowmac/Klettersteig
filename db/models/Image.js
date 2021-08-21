const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');

class Image extends Model {}

Image.init(
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
    data: {
        type: DataTypes.BLOB,
    }
  },
  { sequelize, modelName: 'image', timestamps: false }
);

module.exports = Image;