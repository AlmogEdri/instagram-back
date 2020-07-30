const { statusAndMessage } = require('../utils/helper');
const db = require("../models");
const User = db.user;

// Delete 
// User can only delete him self
// TODO: Enable admin delete option
exports.postDelete = async (req, res) => {
	const { user } = req;

	user.destroy()
		.then(() => statusAndMessage(200, res, `User id ${user.id} was deleted successfully.`))
		.catch(error => statusAndMessage(500, res, error.message));
};

// Edit
exports.postEdit = async (req, res) => {
	const { user } = req;
}

// Get all of the user photos
exports.getPhotos = async (req, res) => {
	let photos, user;
	const id = req.body.id || null;

	// Incase we get id
	if (id) {
		user = await User.findByPk(id)
	} else {
		user = req.user;
	}

	if (!user) {
		statusAndMessage(500, res, `User with id ${id} wasn't found.`);
	}

	try {
		photos = await user.getImages();
	} catch (error) {
		statusAndMessage(500, res, error.message);
	}

	res.status(200).send({ photos });
};

// For tests
exports.getAll = async (req, res) => {
	let users;

	try {
		users = await User.findAll();
	} catch (error) {
		return statusAndMessage(500, res, error.message);;
	}

	return res.status(200).json({ users });
};
