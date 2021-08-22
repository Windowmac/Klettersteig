const Hike = require('./Hike.js');
const User = require('./User.js');
const Times = require('./Times.js');
const FavoriteHikes = require('./FavoriteHikes.js');
const Image = require('./Image')

User.belongsToMany(Hike, {
  through: {
    model: Times,
    unique: false,
  },
});

Hike.belongsToMany(User, {
  through: {
    model: Times,
    unique: false,
  },
});

User.hasMany(FavoriteHikes, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

FavoriteHikes.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Times, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Times.belongsTo(User, {
  foreignKey: 'user_id',
});

Image.belongsTo(Hike, {
  foreignKey: 'hike_id'
});

Hike.hasMany(Image, {
  foreignKey: 'hike_id'
});

module.exports = {
  Hike,
  User,
  Times,
  FavoriteHikes,
  Image
};




