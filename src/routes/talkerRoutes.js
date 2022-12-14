const express = require('express');
const path = require('path');
const { readFile } = require('../utils/readData');

const talkerRoute = express.Router();
talkerRoute.use(express.json());

const filePath = path.resolve('src', 'talker.json');

talkerRoute.get('/talker', async (req, res) => {
    const talkers = await readFile(filePath);
    return res.status(200).json(talkers);
});

module.exports = talkerRoute;