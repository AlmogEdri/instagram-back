const { Router } = require('express');

const { authJwt } = require('../middlewares');
const controller = require('../controllers/post.controller');

const router = Router();

router.post('/create', [authJwt.getUserByToken], controller.postCreate);

router.post('/:userId', [authJwt.verifyToken, authJwt.getUserByToken], controller.getUserPosts);

router.get('/all', [authJwt.verifyToken], controller.getAll);

// Delete Post

// Edit post

module.exports = router;