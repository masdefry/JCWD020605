const path = require('path');
require('dotenv').config({
  path: path.resolve('config.env'),
});

{
  development: {
    username: process.env.db_username,
    password: process.env.db_password,
    database: process.env.db_database,
    host: process.env.db_host,
    dialect: process.env.db_dialect,
  },
  production: {
    username: process.env.db_username,
    password: process.env.db_password,
    database: process.env.db_database,
    host: process.env.db_host,
    dialect: process.env.db_dialect,
  },
}
