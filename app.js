const express = require('express');

const morgan = require('morgan');

const app = express();

//const userRoutes = require('./routes/userRoutes');

app.use(express.json());

//Adding Root routes
//app.use('api/v1/users', userRoutes);

module.exports = app;
