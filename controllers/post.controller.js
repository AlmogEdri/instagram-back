const { statusAndMessage } = require('../utils/helper');
const db = require("../models");
const Post = db.post;
const Image = db.image;

exports.postCreate = async (req, res) => {
	const { title, content } = req.body;
	const file = req.file;

	// Create new post using user association.
	try {
		// This need to be association with one step and not two.
		const post = await req.user.createPost({ title, content });
		const image = await post.createImage({
			name: file.filename,
			display: true,
			userId: req.user.id
		});

		return res.status(200).send({ message: `Post with id: ${post.id} was created.`, image });
	} catch (error) {
		return statusAndMessage(500, res, error.message);
	}
};

exports.getPostById = async (req, res) => {
	const { postId } = req.params;

	try {
		const post = await Post.findByPk(postId);
		const images = await post.getImages();

		return res.status(200).send({ post, images });
	} catch (error) {
		return statusAndMessage(500, res, error.massage);
	}
}

exports.getUserPosts = async (req, res) => {
	const { userId } = req.params;

	try {
		const posts = await Post.findAll({ where: { userId } });

		return res.status(200).json({ posts });
	} catch (error) {
		return statusAndMessage(500, res, error.massage);
	}
};

exports.getAll = async (req, res) => {
	try {
		const posts = await Post.findAll();

		return res.status(200).json({ posts });
	} catch (error) {
		return statusAndMessage(500, res, error.message);;
	}
};

exports.getAllImages = async (req, res) => {
	try {
		const images = await Image.findAll();

		return res.status(200).json({ images }).end();
	} catch (error) {
		return statusAndMessage(500, res, error.message);
	}
};

exports.postDelete = async (req, res) => {
	const { postId } = req.params;

	try {
		let post = await Post.findByPk(postId);
		post.destroy()
			.then(() => statusAndMessage(200, res, `Post id ${postId} was deleted successfully.`));
	} catch (error) {
		statusAndMessage(200, res, error.message)
	}
};

//TODO: build the functionality.
exports.postEdit = async (req, res) => {
	const { postId } = req.params;
};