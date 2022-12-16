const express = require('express');
const path = require('path');
const fieldValidation = require('../midlewares/fieldValidation');
const rateValidation = require('../midlewares/rateValidation');
const talkValidation = require('../midlewares/talkValidation');
const tokenValidation = require('../midlewares/tokenValidation');
const { readFile } = require('../utils/readData');
const { writeFile } = require('../utils/writedata');

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

talkerRoute.post('/talker', tokenValidation, fieldValidation,
     talkValidation, rateValidation, async (req, res) => {
    const { name, age, talk } = req.body;
    const talkers = await readFile(filePath);
    const id = talkers.length + 1;
    const newTalker = {
        id,
        name,
        age,
        talk,
        };      
    talkers.push(newTalker);
    await writeFile(talkers, filePath);
    return res.status(201).json(newTalker);
});

talkerRoute.put('/talker/:id', tokenValidation, fieldValidation,
     talkValidation, rateValidation, async (req, res) => {
    const { name, age, talk } = req.body;
    const { id } = req.params;
    const talkers = await readFile(filePath);
    const talkersFind = talkers.filter((e) => e.id !== Number(id));
    const newTalker = {
        id: Number(id),
        name,
        age,
        talk,
        };      
    talkersFind.push(newTalker);
    await writeFile(talkersFind, filePath);
    return res.status(200).json(newTalker);
});

talkerRoute.delete('/talker/:id', tokenValidation, async (req, res) => {
    const { id } = req.params;
    const talkers = await readFile(filePath);
    const talkersFind = talkers.filter((e) => e.id !== Number(id));      
    await writeFile(talkersFind, filePath);
    return res.status(204);
});

module.exports = talkerRoute;