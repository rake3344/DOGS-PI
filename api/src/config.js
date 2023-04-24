const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  API_KEY: process.env.API_KEY,
};
