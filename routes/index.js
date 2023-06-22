const router = require('express').Router();

router.use('/', require('./swagger'));

router.use('/', require('./'));

router.use('/', require('./'));

module.exports = router;