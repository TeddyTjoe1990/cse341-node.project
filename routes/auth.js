const express = require('express');
const router = express.Router();
const authenticateController = require('../controllers/auth');

router.get('/', authenticateController.loginLogout);

module.exports = router;