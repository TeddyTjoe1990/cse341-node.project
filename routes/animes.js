const express = require('express');
const router = express.Router();
const animeController = require('../controllers/anime');

router.get('/', animeController.getAllAnime);

router.get('/:id', animeController.getAnimeById);

router.post('/', animeController.createAnime);

module.exports = router;
