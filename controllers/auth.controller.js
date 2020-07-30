const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { statusAndMessage } = require('../utils/helper');
const config = require("../configs/auth.config");
const db = require("../models");
const User = db.user;

exports.postSignup = async (req, res) => {
	let user;
	const { username, password, firstName, lastName, email, phone = '', about = '', birthday } = req.body;
	try {
		user = await User.create({
			username,
			password: bcrypt.hashSync(password, 8),
			firstName,
			lastName,
			email,
			phone,
			about,
			birthday
		});
	} catch (error) {
		return statusAndMessage(500, res, error.message);
	};

	return statusAndMessage(200, res, `User with id: ${user.id} was registered successfully!`);
};

exports.postSignin = async (req, res) => {
	let user;
	const error = 'email or password is incorrect!';
	const { email, password } = req.body;

	try {
		user = await User.findOne({ where: { email } });
	} catch (error) {
		return statusAndMessage(500, res, error.message);
	}

	// User don't exist
	if (!user) {
		return statusAndMessage(500, res, error);
	}

	// Compare password with hashed password
	const passwordIsValid = bcrypt.compare(password, user.password);

	if (!passwordIsValid) {
		return res.status(401).send({
			accessToken: null,
			message: error
		});
	}

	// Create access token for 24 hours.
	const accessToken = jwt.sign(
		{ id: user.id, email: user.email },
		config.secret,
		{ expiresIn: 86400 }
	);

	return res.status(200).send({
		id: user.id,
		username: user.username,
		email: user.email,
		accessToken
	});
};