const express = require('express');
const { User, Hike, Times } = require('../db/models');

const router = express.Router();

router.get('/users', async (req, res) => {
  const allUsers = await User.findAll();
  res.json(allUsers);
});

router.post('/users', async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json(newUser);
});

router.get('/users/sign-in/:username', async (req, res) => {
  const user = await User.findOne({ where: { username: req.params.username } });
  const validated = await user.validatePassword(req.body.password);
  console.log('validated variable is: ', validated);
  res.json(validated);
});

router.get('/hikes', async (req, res) => {
  const allHikes = await Hike.findAll();
  res.json(allHikes);
});

router.get('/hikes/:id', async (req, res) => {
  const hike = await Hike.findById(req.params.id).catch(err => {);

})

module.exports = router;
