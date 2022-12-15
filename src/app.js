const express = require('express');
const loginRoute = require('./routes/loginRoutes');
const talkerRoute = require('./routes/talkerRoutes');

const app = express();
app.use(express.json());
app.use(talkerRoute);
app.use(loginRoute);

module.exports = app;