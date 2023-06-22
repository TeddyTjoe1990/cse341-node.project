const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/anime', require('./animes'));
router.use('/watchlist', require('./watchlists'));

module.exports = router;
