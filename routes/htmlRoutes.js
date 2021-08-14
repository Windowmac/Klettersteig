const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('sign-in');
});

router.get('/:username', (req, res) => {
  res.render('landing-page')
})


module.exports = router;
