const { Hike, User, Times, FavoriteHikes } = require('../db/models');
const sequelize = require('../db/connection');
const hikeSeeds = require('./hikes.json');
const userSeeds = require('./users.json');
const timeSeeds = require('./times.json');
const favoriteHikeSeeds = require('./favorite-hikes.json');

const seedDb = async () => {
    await sequelize.sync({ force: true });
    await User.bulkCreate(userSeeds);
    await Hike.bulkCreate(hikeSeeds);
    await Times.bulkCreate(timeSeeds);
    await FavoriteHikes.bulkCreate(favoriteHikeSeeds);
    process.exit(0);
};

seedDb();