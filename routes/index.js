const express = require('express');
const router = express.Router();
const {auth} = require('express-openid-connect');

router.use(auth(authenticator.config));
router.use('/', require('./auth'));

router.use('/', require('./swagger'));
router.use('/anime', require('./animes'));
router.use('/watchlist', require('./watchlists'));

module.exports = router;
