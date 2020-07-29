const { statusAndMessage } = require('../utils/helper');
const db = require("../models");
const Post = db.post;
const User = db.user;

exports.postCreate = async (req, res) => {
	const { title, content } = req.body;
	let post;

	// Create new post using user association.
	try {
		post = req.user.createPost({ title, content })
	} catch (error) {
		return statusAndMessage(500, res, error.message);
	}

	if (!post) {
		return statusAndMessage(500, res, `Post wasn't created.`);
	}

	return res.status(200).send({ message: `Post with id: ${post.id} was created.`, post });
}

exports.getUserPosts = async (req, res) => {
	let posts;
	const { userId } = req.params;

	try {
		posts = await Post.findAll({ where: { userId } });
	} catch (error) {
		return statusAndMessage(500, res, error.massage);

	}

	if (!posts.length) {
		return statusAndMessage(500, res, `No posts for this user.`);
	}

	return res.status(200).json({ posts })
}

exports.getAll = async (req, res) => {
	let posts;

	try {
		posts = await Post.findAll();
	} catch (error) {
		return statusAndMessage(500, res, error.message);;
	}

	return res.status(200).json({ posts })
}