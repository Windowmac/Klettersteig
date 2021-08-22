const express = require('express');
const { User, Hike, Times } = require('../../db/models');

const router = express.Router();

//end url: api/users

router.get('/', async (req, res) => {
  const allUsers = await User.findAll().catch((err) => {
    res.status(500).json('error finding users :(');
  });
  res.status(200).json(allUsers);
});

router.post('/', async (req, res) => {
  const newUser = await User.create(req.body).catch((err) => {
    res.status(500).json(err);
  });
  req.session.save(() => {
    req.session.loggedIn = true;
    res.status(202).json(newUser);
  });
});

router.post('/sign-in/:username', async (req, res) => {
  const user = await User.findOne({
    where: { username: req.params.username },
  }).catch((err) => {
    res.status(500).json('error finding users :(');
  });
  const validated = await user.validatePassword(req.body.password);
  if (validated) {
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = req.params.username;
      res.status(202).json(validated);
    });
  } else {
    res.status(404).json('invalid username or password');
  }
});

module.exports = router;
