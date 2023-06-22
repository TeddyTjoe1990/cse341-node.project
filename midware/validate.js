const validator = require('../helper/validate');

const saveAnime = (req, res, next) => {
  const validationRule = {
    title: 'required|string',
    genre: 'required|string',
    rating: 'required|string',
    releaseYear: 'required|integer',
    author: 'required|string',
    famousCharacter: 'required|string'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

const saveWatchlist = (req, res, next) => {
  const validationRule = {
    title: 'required|string',
    author: 'required|string',
    famousCharacter: 'required|string',
    episode: 'required|integer',
    totalSeason: 'required|integer'
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveAnime,
  saveWatchlist
};