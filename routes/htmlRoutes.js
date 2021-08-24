const express = require('express');
const { User, Hike, FavoriteHikes, Times, Image, UserRatings } = require('../db/models');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('sign-in');
});

router.get('/hikes/:hike_id', async (req, res) => {
  const hikeData = await Hike.findOne({
    where: {
      id: req.params.hike_id
    },
    include: [{model: Image}],
  },
  ).catch((err) => {
    res.status(500).json(err);
  });

  const hike = hikeData.get({ plain: true });
  console.log(hike);
  console.log(req.session.username);
  const userData = await User.findOne({
    where: {
      username: req.session.username,
    }
  }).catch(err => {res.status(500).json(err)});

  const user = userData.get({ plain: true });

  const timeData = await Times.findOne({
    where: {
      user_id: user.id,
      hike_id: hike.id
    }
  }).catch(err => {res.status(500).json(err)});
  
  if(timeData){
    const userTime = timeData.get({ plain: true});

    const hikeImages = hike.images.map(img => img.data.toString('base64'));
    console.log('hikeImages ====== ', hikeImages);
    res.render('hikes', {
      hike,
      user,
      // userDifficulty,
      // userTags,
      // userBestTime,
      userTime,
      // userRatings,
      // useravgRating,
      hikeImages,
      hikeId: req.params.hike_id,
      loggedIn: req.session.loggedIn
    });
  } else {
    const userTime = 'no time input yet!'

  const hikeImages = hike.images.map(img => img.data.toString('base64'));
  console.log('hikeImages ====== ', hikeImages);
  res.render('hikes', {
    hike,
    user,
    // userDifficulty,
    // userTags,
    // userBestTime,
    userTime,
    // userRatings,
    // useravgRating,
    hikeImages,
    hikeId: req.params.hike_id,
    loggedIn: req.session.loggedIn
  });
  }
  
});

router.get('/users/:username/:lat/:lon', async (req, res) => {
  req.session.save(() => {
    req.session.lat = req.params.lat;
    req.session.lon = req.params.lon;
  })
  const userData = await User.findOne({
    where: {
      username: req.params.username,
    },
    include: [{model: FavoriteHikes},
      {model: Times}],
  }).catch((err) => {
    res.status(500).json(err);
  });
  const user = userData.get({ plain: true });
  console.log(user);

  const userState = user.state;
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2908734.6682857913!2d${req.params.lat}!3d${req.params.lon}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shiking%20trails%20in%20${userState}!5e0!3m2!1sen!2sus!4v1628978922827!5m2!1sen!2sus`;

  const allHikes = await Hike.findAll().catch(err => {res.status(500).json(err)});
  const hikes = allHikes.map(hike => hike.get({ plain: true }));
  res.render('landing-page', {
    user,
    mapUrl,
    hikes,
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
