'use strict';

const db = require('../index');
const Issue = require('./issues');
const User = require('./users');

User.hasMany(Issue);
Issue.belongsTo(User);

module.exports = {
  db,
  User,
  Issue,
};
