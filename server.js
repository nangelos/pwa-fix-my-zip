'use strict';

const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

const app = express();

//logging middleware
app.use(volleyball);

//body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//static middleware
app.use(express.static(path.join(__dirname, './public')));

app.use('/api', require('./server/api')); // include our routes!

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
}); // Send index.html for any other requests

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

const { db } = require('./sever/db/models');
const PORT = 8000;

db
  .sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log('db synced');
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  });

module.exports = app;