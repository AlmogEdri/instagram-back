const { statusAndMessage } = require('../utils/helper');
const db = require("../models");
const Post = db.post;
const User = db.user;
const Image = db.image;
const imgConfig = require('../configs/multer.config').img;

exports.postCreate = async (req, res) => {
	// return res.status(200).json(imgConfig).send();
	const { title, content } = req.body;
	const file = req.file;
	let post, image;

	// Create new post using user association.
	try {
		post = await req.user.createPost({ title, content });
		image = await post.createImage({
			name: file.filename,
			display: true,
			userId: req.user.id
		});
	} catch (error) {
		return statusAndMessage(500, res, error.message);
	}

	if (!post) {
		return statusAndMessage(500, res, `Post wasn't created.`);
	}

	return res.status(200).send({ message: `Post with id: ${post.id} was created.`, post, image, file });
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

exports.getImages = async (req, res) => {
	let images;
	try {
		images = await Image.findAll();
		return res.status(200).json(images).end()
	} catch (error) {
		return statusAndMessage(500, res, error.message);
	}




}