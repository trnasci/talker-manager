const express = require('express');
const emailValidation = require('../midlewares/emailValidation');
const passwordValidation = require('../midlewares/passwordValidation');
const { generateToken } = require('../utils/generateToken');

const loginRoute = express.Router();
loginRoute.use(express.json());

loginRoute.post('/login', emailValidation, passwordValidation, (req, res) => {
    const token = generateToken();      
    return res.status(200).json({ token });
  });

module.exports = loginRoute;