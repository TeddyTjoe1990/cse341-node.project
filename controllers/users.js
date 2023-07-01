const mongodb = require('../db/connect');
const database = 'my_project';
const collection = 'user';
const { validationResult } = require('express-validator');

const isAuthorized = async (req, res) => {
  try {
    if (req.oidc.isAuthenticated()) {
      res.status(200).json({
        authorized: true
      });
    } else {
      res.status(200).json({
        authorized: false
      });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { isAuthorized };
