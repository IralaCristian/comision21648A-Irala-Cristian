const { Sequelize, DataTypes } = require('sequelize');

//variables de entorno de la base de datos
const db_schema = process.env.DB_SCHEMA;
const db_user = process.env.DB_USER;
const db_password= process.env.DB_PASSWORD;

// Crear una instancia de conexión a BD
const sequelize = new Sequelize(db_schema, db_user, db_password, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
});




module.exports = {
  sequelize,
  DataTypes,
  Sequelize,
}