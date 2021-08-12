const express = require('express');
const { User, Hike, Times } = require('../db/models');

const router = express.Router();

router.get('/users', async (req, res) => {
  const allUsers = await User.findAll();
  res.status(200).json(allUsers);
});

router.post('/users', async (req, res) => {
  const newUser = await User.create(req.body);
  res.status(201).json(newUser);
});

router.get('/users/sign-in/:username', async (req, res) => {
  const user = await User.findOne({ where: { username: req.params.username } });
  const validated = await user.validatePassword(req.body.password);
  console.log('validated variable is: ', validated);
  res.status(201).json(validated);
});

router.get('/hikes', async (req, res) => {
  const allHikes = await Hike.findAll();
  res.status(200).json(allHikes);
});

router.get('/hikes/:id', async (req, res) => {
  if(req.params.id > 0){
    const hike = await Hike.findByPk(req.params.id).catch(err => {res.status(500).json('error finding hike :(')});
    res.status(200).json(hike);
  } else {
    res.status(404).json('no hike id found');
  }
});

router.get('/hikes/:id/times', async (req, res) => {
  const times = await Times.findOne({ where: { hike_id: req.params.id }}, { include: [{ model: User }]}).catch(err => 
    {res.status(500).json('error finding hike :(')});
  res.status(200).json(times);
})

module.exports = router;
