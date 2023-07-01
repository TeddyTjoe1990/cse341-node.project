const express = require('express');
const router = express.Router();
const animeController = require('../controllers/animes');
const validation = require('../midware/validate');
const {requiresAuth} = require('express-openid-connect');
const { isAuthenticated } = require('../midware/authenticate');

router.get('/', animeController.getAllAnimes);

router.get('/:id', animeController.getAnimeById);

router.post('/', requiresAuth(), isAuthenticated, validation.saveAnime, animeController.createAnime);

router.put('/:id', requiresAuth(), isAuthenticated, validation.saveAnime, animeController.updateAnime);

router.delete('/:id', requiresAuth(), isAuthenticated, animeController.deleteAnime);

module.exports = router;
