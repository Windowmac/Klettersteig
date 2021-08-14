const express = require('express');

const router = express.Router();

const hikeRoutes = require('./apiHikesRoutes.js');
const userRoutes = require('./apiUsersRoutes.js');
const timesRoutes = require('./apiTimesRoutes.js');
const favoritesRoutes = require('./apiFavoriteHikesRoutes.js');

router.use('/users', userRoutes);
router.use('/hikes', hikeRoutes);
router.use('/hikes/:id/times', timesRoutes);
router.use('/favorite-hikes', favoritesRoutes);

module.exports = router;