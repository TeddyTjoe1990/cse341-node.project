const express = require('express');
const router = express.Router();
const watchlistsController = require('../controllers/watchlists');
const validation = require('../midware/validate');

router.get('/', watchlistsController.getAllWatchlists);

router.get('/:id', watchlistsController.getWatchlistById);

router.post('/', validation.saveWatchlist, watchlistsController.createWatchlist);

router.put('/:id', validation.saveWatchlist, watchlistsController.updateWatchlist);

router.delete('/:id', watchlistsController.deleteWatchlist);

module.exports = router;
