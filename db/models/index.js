const Hike = require('./Hike.js');
const User = require('./User.js');
const Times = require('./Times.js');
const FavoriteHikes = require('./FavoriteHikes.js');
const UserRatings = require('./UserRatings.js');
const Image = require('./Image');

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

Hike.hasMany(Image, {
  foreignKey: 'hike_id',
});

Image.belongsTo(Hike, {
  foreignKey: 'hike_id',
});

Times.belongsTo(Hike, {
  foreignKey: 'hike_id',
});

UserRatings.belongsTo(User, {
  foreignKey: 'user_id',
});

UserRatings.belongsTo(Hike, {
  foreignKey: 'hike_id',
});

User.hasMany(UserRatings, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

module.exports = {
  Hike,
  User,
  Times,
  FavoriteHikes,
  UserRatings,
  Image
};




