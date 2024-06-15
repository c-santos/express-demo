const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
	host: process.env.DB_HOST,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	dialect: 'mysql'
})

sequelize.authenticate();

console.log(sequelize)

module.exports = sequelize