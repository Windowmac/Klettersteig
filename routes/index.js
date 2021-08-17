const express = require('express');
const router = express.Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./htmlRoutes');
const session = require('express-session');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;

