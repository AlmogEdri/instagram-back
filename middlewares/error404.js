/**
 * Middleware for when user try to get to unexisting routes.
 * 
 * @return {Response}
 */
module.exports = (req, res) => res.status(404).send({ error: 'Route not existing or you are not authorized.' });