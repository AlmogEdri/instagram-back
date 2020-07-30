const { statusAndMessage } = require('../utils/helper');
const db = require("../models");
const User = db.user;

// User can only delete him self
// TODO: Enable admin delete option
exports.postDelete = async (req, res) => {
	const { user } = req;

	user.destroy()
		.then(() => statusAndMessage(200, res, `User id ${user.id} was deleted successfully.`))
		.catch(error => statusAndMessage(500, res, error.message));
};

// TODO: build the functionality.
exports.postEdit = async (req, res) => {
	const { user } = req;
};

// Get all of the user photos
exports.getPhotos = async (req, res) => {
	let user;
	const id = req.body.id || null;

	try {
		// Incase we get id
		if (id) {
			user = await User.findByPk(id);
		} else {
			user = req.user;
		}

		const photos = await user.getImages();

		return res.status(200).send({ photos });
	} catch (error) {
		statusAndMessage(500, res, error.message);
	}
};

// For tests
exports.getAll = async (req, res) => {
	try {
		const users = await User.findAll();

		return res.status(200).json({ users });
	} catch (error) {
		return statusAndMessage(500, res, error.message);;
	}
};
