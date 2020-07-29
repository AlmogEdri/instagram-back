module.exports = (sequelize, Sequelize) => {
	const Post = sequelize.define('posts', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		title: Sequelize.STRING,
		content: Sequelize.TEXT,
		createdAt: Sequelize.DATE,
		updatedAt: Sequelize.DATE
	});

	return Post;
};