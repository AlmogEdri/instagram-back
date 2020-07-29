module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('users', {
		id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			allowNull: false,
			primaryKey: true,
		},
		username: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		firstName: {
			type: Sequelize.STRING,
			allowNull: false
		},
		lastName: {
			type: Sequelize.STRING,
			allowNull: false
		},
		email: {
			type: Sequelize.STRING,
			allowNull: false,
			unique: true
		},
		password: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		phone: {
			type: Sequelize.STRING,
			allowNull: true,
			// unique: true
		},
		birthday: {
			type: Sequelize.DATE,
			allowNull: true
		},
		about: Sequelize.TEXT,
		createdAt: Sequelize.DATE,
		updatedAt: Sequelize.DATE
	});

	return User;
};