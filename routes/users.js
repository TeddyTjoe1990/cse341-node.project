const routes = require('express').Router();
const usersController = require('../controllers/users');

routes.get('/authorized', usersController.isAuthorized);

routes.get('/save', usersController.saveUserData);

module.exports = routes;