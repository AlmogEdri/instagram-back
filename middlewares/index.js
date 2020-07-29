const authJwt = require('./authJwt');
const verifySignUp = require('./verifySignUp');
const error404 = require('./error404');
const globalHeader = require('./globalHeader');

module.exports = {
  authJwt,
  verifySignUp,
  error404,
  globalHeader
};
