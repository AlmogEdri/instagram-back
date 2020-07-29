const jwt = require('jsonwebtoken');

const { statusAndMessage } = require('../utils/helper');
const config = require('../configs/auth.config');
const User = require("../models").user;

/**
 * Check if the request has verify token or not.
 * 
 * @return {next || Response}
 */
verifyToken = (req, res, next) => {
	const token = req.headers['x-access-token'];

	if (!token) {
		return res.status(403).send({ message: 'No token provided!' });
	}

	jwt.verify(token, config.secret, (err, decoded) => {
		if (err) {
			return res.status(401).send({ message: 'Unauthorized!' });
		}
		req.userId = decoded.id;
		next();
	});
};

/**
 * Add the user to the request by decrypting the token.
 * 
 * @return {next}
 */
getUserByToken = async (req, res, next) => {
	let user;
	const token = req.headers['x-access-token'];
	const decoded = jwt.decode(token, { complete: true });
	const { id } = decoded.payload;

	try {
		user = await User.findOne({ where: { id } })
	} catch (error) {
		return statusAndMessage(500, res, error.message);
	}

	if (!user) {
		return statusAndMessage(500, res, `Token isn't good`);
	}

	req.user = user;
	next();
};

module.exports = {
	verifyToken,
	getUserByToken
};