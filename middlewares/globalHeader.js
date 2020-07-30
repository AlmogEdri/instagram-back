/**
 * Middleware for defining global response header.
 * 
 * @return {next}
 */
module.exports = (req, res, next) => {
	res.setHeader(
		'Access-Control-Allow-Headers',
		'x-access-token, Origin, Content-Type, Accept'
	);
	next();
}