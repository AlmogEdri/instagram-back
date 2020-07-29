const Sequelize = require('sequelize');

const config = require('../configs/db.config');

const { dialect, storage, pool } = config;
const sequelize = new Sequelize({
	dialect,
	storage,
	pool
});


// Test connection
sequelize
	.authenticate()
	.then(() => console.log('Connection has been established successfully.'))
	.catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;