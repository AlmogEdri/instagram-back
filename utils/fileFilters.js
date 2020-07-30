const imageFilter = (req, file, cb) => {
	// Accept images only
	if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
		const error = 'Only image files are allowed!';
		
		req.fileValidationError = error;
		return cb(new Error(error), false);
	}
	cb(null, true);
};

module.exports = {
	imageFilter
}