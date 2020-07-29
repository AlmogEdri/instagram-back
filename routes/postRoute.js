const { Router } = require('express');

const { authJwt } = require('../middlewares');
const controller = require('../controllers/post.controller');

const router = Router();

// Create new post
router.post('/create', [authJwt.getUserByToken], controller.postCreate)

router.post('/:userId', [authJwt.verifyToken, authJwt.getUserByToken], controller.getUserPosts)

router.get('/all', [authJwt.verifyToken], controller.getAll)

// Get all user posts by user id
// router.get('/posts/user/:userId', postController)
// Get post by post id


// Delete Post

// Edit post

module.exports = router;