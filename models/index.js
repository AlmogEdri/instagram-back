// // NOTE: All of the relations are established in the model field
// const User = require('./User');
// const Post = require('./Post');
// const Image = require('./Image');
// const Story = require('./Story');
// const Message = require('./Message');
// const Comments = require('./Comments');
// const UserFollow = require('./UserFollow');


// export default {
// 	User,
// 	UserFollow,
// 	Post,
// 	Message,
// 	Story,
// 	Comments,
// 	Image
// };

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

db.image.hasOne(db.post);

sequelize.authenticate()
	.then(() => console.log('Connection has been established successfully.'))
	.catch(error => console.error('Unable to connect to the database:', error));

module.exports = db;
