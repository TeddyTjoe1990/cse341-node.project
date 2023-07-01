const express = require('express');
const router = express.Router();
const authenticator = require('../midware/authenticate');
const {auth} = require('express-openid-connect');

router.use(auth(authenticator.config));
router.use('/', require('./authenticate'));

router.use('/', require('./swagger'));
router.use('/anime', require('./animes'));
router.use('/watchlist', require('./watchlists'));

router.use('/user', require('./user'));

module.exports = router;
