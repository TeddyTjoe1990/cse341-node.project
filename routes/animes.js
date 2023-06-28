const express = require('express');
const router = express.Router();
const animeController = require('../controllers/animes');
const validation = require('../midware/validate');
const {requiresAuth} = require('express-openid-connect');

router.get('/', animeController.getAllAnimes);

router.get('/:id', animeController.getAnimeById);

router.post('/', requiresAuth(), validation.saveAnime, animeController.createAnime);

router.put('/:id', requiresAuth(), validation.saveAnime, animeController.updateAnime);

router.delete('/:id', requiresAuth(), animeController.deleteAnime);

module.exports = router;
