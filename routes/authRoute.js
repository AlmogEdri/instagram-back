const { Router } = require('express');
const { verifySignUp, authJwt } = require('../middlewares');
const controller = require('../controllers/auth.controller');

const router = Router();

router.post('/signup', [verifySignUp.checkDuplicateUsernameOrEmail], controller.postSignup);

router.post('/signin', controller.postSignin);

router.post('/delete',[authJwt.verifyToken], controller.postDelete);

router.get('/all', controller.getAll);

module.exports = router;