const { Router } = require('express');
const { verifySignUp } = require('../middlewares');
const controller = require('../controllers/auth.controller');

const router = Router();

router.post('/signup', [verifySignUp.checkDuplicateUsernameOrEmail], controller.postSignup);

router.post('/signin', controller.postSignin);

module.exports = router;