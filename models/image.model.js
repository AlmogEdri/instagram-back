module.exports = (sequelize, Sequelize) => {
	const Image = sequelize.define('images', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		name: Sequelize.STRING,
		display: Sequelize.BOOLEAN,
		content: Sequelize.TEXT,
		createdAt: Sequelize.DATE,
		updatedAt: Sequelize.DATE
	});

	return Image;
};