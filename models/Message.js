// TODO: Transform to the new structure.

// const Sequelize = require('sequelize');

// const sequelize = require('../utils/database');
// const User = require('./User');

// const Story = sequelize.define('story', {
// 	id: {
// 		type: Sequelize.INTEGER,
// 		autoIncrement: true,
// 		allowNull: false,
// 		primaryKey: true,
// 	},
// 	senderId: {
// 		type: Sequelize.INTEGER,
// 		allowNull: false,
// 		references: {
// 			model: User,
// 			key: 'id'
// 		}
// 	},
// 	recipientId: {
// 		type: Sequelize.INTEGER,
// 		allowNull: false,
// 		references: {
// 			model: User,
// 			key: 'id'
// 		}
// 	},
// 	content: Sequelize.TEXT,
// 	createdAt: Sequelize.DATE,
// 	updatedAt: Sequelize.DATE,
// });

// module.exports = Story;