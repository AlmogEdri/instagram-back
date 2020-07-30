const { Router } = require('express');
const multer = require('multer');

const imgConfig = require('../configs/multer.config').img;
const { authJwt } = require('../middlewares');
const controller = require('../controllers/post.controller');

const storage = multer.diskStorage({...imgConfig.storage})
const upload = multer({ storage });
const router = Router();

router.post('/create', [authJwt.getUserByToken], upload.single('postImg'), controller.postCreate);

router.post('/:userId', [authJwt.verifyToken, authJwt.getUserByToken], controller.getUserPosts);

router.get('/all', [authJwt.verifyToken], controller.getAll);

router.get('/images', controller.getImages);

// Delete Post

// Edit post

module.exports = router;