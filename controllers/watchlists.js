const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllWatchlists = async (req, res) => {
  try {
    const result = await mongodb.getDb().db('my_project').collection('watchlists').find();
    result.toArray().then((watchlists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(watchlists);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getWatchlistById = async (req, res) => {
  try {
    const watchlistId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db('').collection('').find({ _id: watchlistId });
    result.toArray().then((watchlists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(watchlists[0]);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createWatchlist = async (req, res) => {
  try {
    const watchlists = {
      title: req.body.title,
      author: req.body.author,
      famousCharacter: req.body.famousCharacter,
      episode: req.body.episode,
      totalSeason: req.body.totalSeason
    };

    const response = await mongodb
      .getDb()
      .db('my_project')
      .collection('watchlists')
      .insertOne(watchlists);
    if (response.acknowledged) {
      console.log('Created successfully');
      res.setHeader('Content-Type', 'application/json');
      res.status(201).json(response);
    } else {
      res.status(500).json(response.error || 'An error occurred! Wishlist not created!');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const updateWatchlist = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid watchlist id to update a watchlist.');
    }
    const watchlistId = new ObjectId(req.params.id);
    const watchlist = {
      title: req.body.title,
      author: req.body.author,
      famousCharacter: req.body.famousCharacter,
      episode: req.body.episode,
      totalSeason: req.body.totalSeason
    };
    const response = await mongodb
      .getDb()
      .db('my_project')
      .collection('watchlists')
      .replaceOne({ _id: watchlistId }, watchlist);
    console.log(response);
    if (response.modifiedCount === 1) {
      console.log('Updated successfully');
      res.setHeader('Content-Type', 'application/json');
      res.status(204).json(response).send;
    } else {
      res.status(500).json(response.error || 'An error occurred!');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const deleteWatchlist = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid watchlist id to delete a watchlist.');
    }
    const watchlistId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db('my_project')
      .collection('watchlists')
      .deleteOne({ _id: watchlistId });
    if (response.deletedCount === 1) {
      console.log('Deleted successfully');
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(response).send;
    } else {
      res.status(500).json(response.error || 'An error occurred!');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getAllWatchlists,
  getWatchlistById,
  createWatchlist,
  updateWatchlist,
  deleteWatchlist
};
