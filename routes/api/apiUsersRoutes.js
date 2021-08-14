const express = require('express');
const { User, Hike, Times } = require('../../db/models');

const router = express.Router();

//end url: api/users

router.get('/', async (req, res) => {
    const allUsers = await User.findAll().catch(err => {res.status(500).json('error finding users :(')});
    res.status(200).json(allUsers);
  });
  
  router.post('/', async (req, res) => {
    const newUser = await User.create(req.body).catch(err => {res.status(500).json('error creating user :(')});;
    res.status(201).json(newUser);
  });
  
  router.get('/sign-in/:username', async (req, res) => {
    const user = await User.findOne({ where: { username: req.params.username } }).catch(err => {
      res.status(500).json('error finding users :(')});;
    const validated = await user.validatePassword(req.body.password);
    console.log('validated variable is: ', validated);
    res.status(201).json(validated);
  });

  module.exports = router;