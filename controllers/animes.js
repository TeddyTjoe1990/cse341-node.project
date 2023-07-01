const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllAnimes = async (req, res) => {
  try {
    const result = await mongodb.getDb().db('my_project').collection('animes').find();
    result.toArray().then((animes) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(animes);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getAnimeById = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid id to find the data!');
    }
    const entryId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db('my_project')
      .collection('animes')
      .find({ _id: entryId });
    result.toArray().then((animes) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(animes[0]);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createAnime = async (req, res) => {
  try {
    const anime = {
      title: req.body.title,
      genre: req.body.genre,
      rating: req.body.rating,
      releaseYear: req.body.releaseYear,
      author: req.body.author,
      famousCharacter: req.body.famousCharacter
    };

    const response = await mongodb.getDb().db('my_project').collection('animes').insertOne(anime);
    if (response.acknowledged) {
      console.log('Created successfully');
      res.setHeader('Content-Type', 'application/json');
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(response.error || 'An error occurred while creating the trip!');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const updateAnime = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid id to update the data!');
    }
    const animeId = new ObjectId(req.params.id);
    const anime = {
      title: req.body.title,
      genre: req.body.genre,
      rating: req.body.rating,
      releaseYear: req.body.releaseYear,
      author: req.body.author,
      famousCharacter: req.body.famousCharacter
    };
    const response = await mongodb
      .getDb()
      .db('my_project')
      .collection('animes')
      .replaceOne({ _id: animeId }, anime);
    console.log(response);
    if (response.modifiedCount === 1) {
      console.log('Updated successfully');
      res.setHeader('Content-Type', 'application/json');
      res.status(204).json(response).send;
    } else {
      res.status(500).json(response.error || 'An error occurred while updating data!');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

const deleteAnime = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid id to delete the data!');
    }
    const animeId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db('my_project')
      .collection('animes')
      .deleteOne({ _id: animeId });
    if (response.deletedCount === 1) {
      console.log('Deleted successfully');
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(response).send;
    } else {
      res.status(500).json(response.error || 'An error occurred while deleting data!');
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getAllAnimes,
  getAnimeById,
  createAnime,
  updateAnime,
  deleteAnime
};
