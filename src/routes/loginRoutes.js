const express = require('express');
const { generateToken } = require('../utils/generateToken');

const loginRoute = express.Router();
loginRoute.use(express.json());

loginRoute.post('/login', (req, res) => {
    const { email, password } = req.body;
    const loginPerson = {
        email,
        password,
    };
    console.log(loginPerson);
    const token = generateToken();      
    return res.status(200).json({ token });
  });

module.exports = loginRoute;