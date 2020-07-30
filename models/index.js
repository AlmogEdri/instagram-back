const Sequelize = require('sequelize');
const config = require('../configs/db.config');

const sequelize = new Sequelize({
	dialect: config.dialect,
	storage: config.storage,
	pool: config.pool
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require('./user.model')(sequelize, Sequelize);
db.post = require('./post.model')(sequelize, Sequelize);
db.image = require('./image.model')(sequelize, Sequelize);


// Associations
db.user.hasMany(db.post);
db.post.belongsTo(db.user);

db.user.hasMany(db.image);
db.image.belongsTo(db.user);

db.post.hasMany(db.image);
db.image.belongsTo(db.post);

// Check db connection.
sequelize.authenticate()
	.then(() => console.log('Connection has been established successfully.'))
	.catch(error => console.error('Unable to connect to the database:', error));

module.exports = db;
