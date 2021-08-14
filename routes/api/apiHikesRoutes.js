const express = require('express');
const { User, Hike, Times } = require('../../db/models');

const router = express.Router();

//end url: api/hikes

router.get('/', async (req, res) => {
    const allHikes = await Hike.findAll();
    res.status(200).json(allHikes);
  });
  
  router.post('/', async (req, res) => {
    const newHike = await Hike.create(req.body);
    res.status(201).json(newHike);
  })
  
  router.get('/:id', async (req, res) => {
    if(req.params.id > 0){
      const hike = await Hike.findByPk(req.params.id).catch(err => {res.status(500).json('error finding hike :(')});
      res.status(200).json(hike);
    } else {
      res.status(404).json('no hike id found');
    }
  });

  module.exports = router;