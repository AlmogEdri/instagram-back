const db = require("../models");
const User = db.user;


/**
 * Check if user with that email and/or username exist.
 * 
 * @return {void}
 */
checkDuplicateUsernameOrEmail = async (req, res, next) => {
	const { username, email } = req.body;

	let user = await User.findOne({ where: { username } });

	if (user) {
		res.status(400).send({
			message: "Failed! Username is already in use!"
		});
		return;
	}

	user = await User.findOne({ where: { email } });

	if (user) {
		res.status(400).send({
			message: "Failed! Email is already in use!"
		});
		return;
	}

	next();
};

module.exports = {
	checkDuplicateUsernameOrEmail
};