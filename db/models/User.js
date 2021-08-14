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
    username: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  { sequelize, modelName: 'user', freezeTableName: true, timestamps: false }
);

User.addHook('beforeCreate', async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
  return user;
});

module.exports = User;
