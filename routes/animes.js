const express = require('express');
const router = express.Router();
const animeController = require('../controllers/animes');
const validation = require('../midware/validate');

router.get('/', animeController.getAllAnimes);

router.get('/:id', animeController.getAnimeById);

router.post('/', validation.saveAnime, animeController.createAnime);

router.put('/:id', validation.saveAnime, animeController.updateAnime);

router.delete('/:id', animeController.deleteAnime);

module.exports = router;
