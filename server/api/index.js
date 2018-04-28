'use strict';
const apiRouter = require('express').Router();
const db = require('../db');

apiRouter.use('/issues', require('./issues'));

apiRouter.use('/users', require('./users'));

module.exports = apiRouter;
