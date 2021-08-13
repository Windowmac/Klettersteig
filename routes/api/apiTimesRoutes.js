const express = require('express');
const { User, Hike, Times } = require('../../db/models');

const router = express.Router();

//end url: /api/hikes/:id/times

router.get('/', async (req, res) => {
    const times = await Times.findOne({ where: { hike_id: req.params.id }}, { include: [{ model: User }]}).catch(err => 
      {res.status(500).json('error finding hike :(')});
    res.status(200).json(times);
  });
  
  router.post('/', async (req, res) => {
    const time = await Times.create(req.body).catch(err =>  {res.status(500).json('error creating time :(')});
    res.status(201).json(time);
  });

  module.exports = router;