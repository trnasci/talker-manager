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

talkerRoute.get('/talker/:id', async (req, res) => {
    const { id } = req.params;
    const talkers = await readFile(filePath);
    const talkersFind = talkers.filter((e) => e.id === Number(id));
    if (talkersFind.length === 0) {
      return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });        
    }
    return res.status(200).json(talkersFind[0]);
});

module.exports = talkerRoute;