const express = require('express');
const loginRoute = require('./routes/loginRoutes');
const talkerRoute = require('./routes/talkerRoutes');

const app = express();
app.use(express.json());
app.use(loginRoute);
app.use(talkerRoute);

module.exports = app;