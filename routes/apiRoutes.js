const express = require('express');
const User = require('../db/models/User');

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

module.exports = router;
