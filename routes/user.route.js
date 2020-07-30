const { Router } = require('express');
// const multer = require('multer');

const { authJwt } = require('../middlewares');
const controller = require('../controllers/user.controller');

const router = Router();

router.post('/delete', [authJwt.verifyToken, authJwt.getUserByToken], controller.postDelete);

router.get('/photos', [authJwt.verifyToken, authJwt.getUserByToken], controller.getPhotos);

router.get('/all', controller.getAll);

module.exports = router;