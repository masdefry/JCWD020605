require("dotenv").config({ path: `${__dirname}/../.env` });

module.exports = {
  development: {
    username: process.env.db_username,
    password: process.env.db_password,
    database: process.env.db_database,
    host: process.env.db_host,
    port: process.env.db_port,
    dialect: process.env.db_dialect
  },
  test: {
     username: process.env.db_username,
     password: process.env.db_password,
     database: process.env.db_database,
     host: process.env.db_host,
     port: process.env.db_port,
     dialect: process.env.db_dialect
  },
  production: {
    username: process.env.db_username,
    password: process.env.db_password,
    database: process.env.db_database,
    host: process.env.db_host,
    port: process.env.db_port,
    dialect: process.env.db_dialect
  },
};
