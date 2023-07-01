const express = require('express');
const router = express.Router();
const watchlistsController = require('../controllers/watchlists');
const validation = require('../midware/validate');
const {requiresAuth} = require('express-openid-connect');
const {isAuthenticated} = require('../midware/authenticate');

router.get('/', watchlistsController.getAllWatchlists);

router.get('/:id', watchlistsController.getWatchlistById);

router.post('/', requiresAuth(), isAuthenticated, validation.saveWatchlist, watchlistsController.createWatchlist);

router.put('/:id', requiresAuth(), isAuthenticated, validation.saveWatchlist, watchlistsController.updateWatchlist);

router.delete('/:id', requiresAuth(), isAuthenticated, watchlistsController.deleteWatchlist);

module.exports = router;
