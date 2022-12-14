const express = require('express');
const talkerRoute = require('./routes/talkerRoutes');

const app = express();
app.use(express.json());
app.use(talkerRoute);

module.exports = app;