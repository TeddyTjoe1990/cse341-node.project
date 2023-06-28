const express = require('express');
const router = express.Router();
const watchlistsController = require('../controllers/watchlists');
const validation = require('../midware/validate');
const {requiresAuth} = require('express-openid-connect');

router.get('/', watchlistsController.getAllWatchlists);

router.get('/:id', watchlistsController.getWatchlistById);

router.post('/', requiresAuth(), validation.saveWatchlist, watchlistsController.createWatchlist);

router.put('/:id', requiresAuth(), validation.saveWatchlist, watchlistsController.updateWatchlist);

router.delete('/:id', requiresAuth(), watchlistsController.deleteWatchlist);

module.exports = router;
