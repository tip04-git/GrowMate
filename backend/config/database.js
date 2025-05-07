const { Sequelize } = require('sequelize');
require('dotenv').config();

// Initialize Sequelize connection with PostgreSQL
const sequelize = new Sequelize({
  host: 'localhost',
  dialect: 'postgres',
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging:false,
});

module.exports = sequelize;
