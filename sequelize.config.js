/*
  Sequelize CLI entrypoint
  We also import this file when we initialize the Sequelize connection for models in Express.

  This comment is stolen from the lxp-base-api project.

  1. Run `npx sequelize-cli init` to create the config file.

*/

// When sequelize-cli is used, it will load .env into the environment (process.env).
require('dotenv').config();

// Object to pull values
const config = {
  username: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  host: process.env.SQL_HOST,
  port: process.env.SQL_PORT,
  dialect: 'mysql',
};

// Export the config object for the Sequelize CLI.

// Instead of exporting a function like lxp,
// a plain object is exported to be compatible with
// the Sequelize CLI.
module.exports = {
  development: config,
  test: config,
  production: config,
};
