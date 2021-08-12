const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('sign-in');
});


module.exports = router;
