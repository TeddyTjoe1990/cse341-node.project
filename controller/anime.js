const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllAnime = async (req, res, next) => {
    try {
        const result = await mongodb.getDb().db('my_project').collection('animes').find();
        result.toArray().then((anime) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(anime);
    });
} catch (err) {
    res.status(500).json(err);
}
};

const getAnimeById = async (req, res, next) => {
    try {
    const entryId = new ObjectId(req.params.id);
    const result = await mongodb
        .getDb()
        .db('my_project')
        .collection('animes')
        .find({ _id: entryId});
    result.toArray().then((anime) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(anime[0]);
    });
} catch (err) {
    res.status(500).json(err);
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
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'An error ocurred while creating the movie entry.');
    }
} catch (err) {
    res.status(500).json(err);
}
};

module.exports = {
    getAllAnime,
    getAnimeById,
    createAnime,
};