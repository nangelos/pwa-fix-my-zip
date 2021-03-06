const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const bodyParser = require('body-parser');

const app = express();

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

// static middleware
app.use(express.static(path.join(__dirname, '../build')));

app.use('/api', require('./api')); // include our routes!

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'));
}); // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  console.dir(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

const { db } = require('./db/models');
const PORT = process.env.PORT || 8000;

db
  .sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log('db synced');
    app.listen(PORT, () => console.log(`listening on port ${PORT}`));
  });

module.exports = app;
