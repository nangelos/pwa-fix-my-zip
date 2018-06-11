require('dotenv').config({ path: '/Users/Nick/code/pwa-fix-my-zip/.env' })
const chalk = require('chalk');
const Sequelize = require('sequelize');
const pkg = require('../../package.json');
const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '');

console.log(chalk.yellow('Opening database connection'));

const dbHost = process.env.NODE_ENV === 'test' ? `postgres://localhost:5432/` : process.env.DB_HOST;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASSWORD;

// create the database instance that can be used in other database files
module.exports = new Sequelize(dbName, dbUser, dbPass, {
  host: dbHost,
  dialect: 'postgres',
  logging: false,
});
