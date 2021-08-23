const express = require('express');

const router = express.Router();

const hikeRoutes = require('./apiHikesRoutes.js');
const userRoutes = require('./apiUsersRoutes.js');
const timesRoutes = require('./apiTimesRoutes.js');
const favoritesRoutes = require('./apiFavoriteHikesRoutes.js');
const imageRoutes = require('./apiImageRoutes');

router.use('/users', userRoutes);
router.use('/hikes', hikeRoutes);
router.use('/hikes/:id/times', timesRoutes);
router.use('/favorite-hikes', favoritesRoutes);
router.use('/images', imageRoutes)

module.exports = router;