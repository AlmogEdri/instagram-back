const { Router } = require('express');
const multer = require('multer');

const imgConfig = require('../configs/multer.config').img;
const { authJwt } = require('../middlewares');
const controller = require('../controllers/post.controller');

const storage = multer.diskStorage({...imgConfig.storage})
const upload = multer({ storage });
const router = Router();

router.post('/create', [authJwt.getUserByToken], upload.single('postImg'), controller.postCreate);

router.get('/user/:userId', [authJwt.verifyToken, authJwt.getUserByToken], controller.getUserPosts);

router.post('/delete/:postId', [authJwt.verifyToken, authJwt.getUserByToken], controller.postDelete);

router.post('/edit/:postId', [authJwt.verifyToken, authJwt.getUserByToken], controller.postEdit);

// For tests
router.get('/images', controller.getAllImages);

// For tests
router.get('/all', controller.getAll);

// Need to be last
router.get('/:postId', [authJwt.verifyToken, authJwt.getUserByToken], controller.getPostById);

module.exports = router;