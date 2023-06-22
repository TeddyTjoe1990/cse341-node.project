const express = require('express');
const router = express.Router();
const watchlistsController = require('../controllers/watchlists');
const validation = require('../middleware/validate');

// GET all wishlists
router.get('/', watchlistsController.getAllWatchlists);

// GET a single wishlist
router.get('/:id', watchlistsController.getWatchlistById);

// POST a new wishlist
router.post('/', validation.saveWatchlist, watchlistsController.createWatchlist);

// PUT update data in an existing wishlist
router.put('/:id', validation.saveWatchlist, watchlistsController.updateWatchlist);

// DELETE a wishlist
router.delete('/:id', watchlistsController.deleteWatchlist);

module.exports = router;