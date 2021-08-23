const express = require('express');
const { User, Hike, Times, Image } = require('../../db/models');

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

  router.post('/:id/add-pic', async (req, res) => {
    if(req.params.id > 0){
      const hikeData = await Hike.findByPk(req.params.id).catch(err => {res.status(500).json('error finding hike :(')});
      const userData = await User.findOne({
        where: {
          username: req.session.username
        }
      }).catch(err => {res.status(500).json(err)});

      const hike = hikeData.get({ plain: true });
      const user = userData.get({ plain: true });

      const image = await Image.create({
        data: req.body.data,
        user_id: user.id,
        hike_id: hike.id
      }).catch(err => {res.status(500).json(err)});
      console.log(image.id)
      res.status(202).json(image.id);
    } else {
      res.status(404).json('no hike id found');
    }
    
  })

  module.exports = router;