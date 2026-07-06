/*
  Sequelize CLI entrypoint. Adapted from lxp-base-api but simplified for local dev
  (no AWS Secrets Manager, no replica DBs here).

  Exports a plain env-keyed object (config) instead of lxp's async function, since that's
  what vanilla sequelize-cli expects (`require(configPath)[env]`). Values come
  straight from `.env` via dotenv.

  Will also back the Express Sequelize connection once that's built in the next phase.
*/

// see header comment: this loads .env directly and has no AWS secrets manager.
require('dotenv').config();

// see header comment: object to pull values from .env
const config = {
  username: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  host: process.env.SQL_HOST,
  port: process.env.SQL_PORT,
  dialect: 'mysql',
};

// see header comment: plain object here instead of lxp's async function, for vanilla sequelize-cli compatibility.
module.exports = {
  development: config,
  test: config,
  production: config,
};
