const express = require('express');
const router = express.Router();
const watchController = require('../controllers/watchlist');

router.get('/', watchController.getAllWishlists);

router.get('/:id', watchController.getWishlistById);

router.post('/', watchController.createWishlist);

module.exports = router;