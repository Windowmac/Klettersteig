const express = require('express');
const { User, Hike, FavoriteHikes, Times } = require('../db/models');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('sign-in');
});

router.get('/hikes/:hike_id', async (req, res) => {
  const hikeData = await Hike.findByPk(req.params.id).catch(err => {res.status(500).json('cannot find hike')});

  res.render('hikes', {
    hikeData
  });
});

router.get('/users/:username/:lat/:lon', async (req, res) => {
  const userData = await User.findOne({ 
    where: {
    username: req.params.username
  },
  include: {
    model: FavoriteHikes, model: Times
  }
}).catch(err => {
    res.status(500).json('unable to find user')
  });
  
  const userState = userData.state;
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2908734.6682857913!2d${req.params.lat}!3d${req.params.lon}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shiking%20trails%20in%20${userState}!5e0!3m2!1sen!2sus!4v1628978922827!5m2!1sen!2sus`;

  res.render('landing-page', {
    userData,
    mapUrl
  })
});



module.exports = router;
