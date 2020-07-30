module.exports = (sequelize, Sequelize) => {
	const Message = sequelize.define('message', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		content: Sequelize.TEXT,
		createdAt: Sequelize.DATE,
		updatedAt: Sequelize.DATE
	});

	return Message;
};