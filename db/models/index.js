const Hike = require('./Hike.js');
const User = require('./User.js');
const Times = require('./Times.js');

User.belongsToMany(Hike, {
    through: {
        model: Times,
        unique: false,
    }
});

Hike.belongsToMany(User, {
    through: {
        model: Times,
        unique: false,
    }
});

module.exports = { Hike, User, Times };