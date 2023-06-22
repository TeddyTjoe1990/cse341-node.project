const express = require('express');
const router = express.Router();
const animeController = require('../controllers/anime');

router.get('/', animeController.getAll);

router.get('/:id', animeController.getSingle);

router.post('/', animeController.createData);

module.exports = router;
