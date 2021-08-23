const { Model, DataTypes } = require('sequelize');
const sequelize = require('../connection');
const bcrypt = require('bcrypt');

class User extends Model {
  validatePassword(password) {
    return bcrypt.compare(password, this.password);
  }
}
User.init(
  {
    username: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
      },
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        min: 8
      }
    },
    first_name: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
      }
    },
    last_name: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
      }
    },    
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      }
    },
    state: {
      type: DataTypes.STRING,
      validate: {
        isAlpha: true,
      }
    },
  },
  { sequelize, modelName: 'user', freezeTableName: true, timestamps: false }
);

User.addHook('beforeCreate', async (user) => {

  user.password = await bcrypt.hash(user.password, 10);
  return user;
});

module.exports = User;
