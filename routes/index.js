const auth = require('./auth.route');
const post = require('./post.route');
const user = require('./user.route');

const routes = { auth, post, user };

module.exports = (app) => {
	Object.keys(routes).forEach(route => app.use(`/${route}`, routes[route]))
};