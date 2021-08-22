const express = require('express');
const { FavoriteHikes } = require('../../db/models');

const router = express.Router();

//end url: api/favorite-hikes

router.get('/', async (req, res) => {
  const favoriteHikes = await FavoriteHikes.findAll()
    .catch((err) => {
      res.status(500).json('Request not found :(' + err);
    });
  res.status(200).json(favoriteHikes);
});

router.get('/user', async (req, res) => {
  if (req.body.user_id) {
    const favoriteHikes = await FavoriteHikes.findAll({
      where: {
        user_id: req.body.user_id,
      },
    }).catch((err) => {
      res.status(404).json('Request not found :(' + err);
    });
    res.status(200).json(favoriteHikes);
  } else {
    res.status(400).json('An ID is needed to find a favorite hike.');
  }
});

router.post('/api/favorite-hikes/', async (req, res) => {
  if (req.body.user_id && req.body.hike_id) {
    const newFavoriteHike = await FavoriteHikes.create(req.body).catch(
      (err) => {
        res.status(500).json(err);
      }
    );
    res.status(201).json(newFavoriteHike);
  } else {
    res.status(400).json('An ID is needed to add a favorite hike.');
  }
});

module.exports = router;
