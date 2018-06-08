'use strict';
const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../../package.json');
const databaseName =
  pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '');

console.log(chalk.yellow('Opening database connection: '));

// create the database instance that can be used in other database files
module.exports = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
  logging: false,
});
