const express = require('express');
const { Image } = require('../../db/models');

const router = express.Router();

//end url: api/images

router.get('/', async (req, res) => {
    const allImages = await Image.findAll();
    res.status(200).json(allImages);
  });
module.exports = router;