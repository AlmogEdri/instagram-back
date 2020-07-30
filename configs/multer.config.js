const path = require('path');

const { imageFilter } = require('../utils/fileFilters');

module.exports = {
	img: {
		storage: {
			fileFilter: imageFilter, // TODO: Not working
			destination: (req, file, cb) => cb(null, 'uploads/images'),
			filename: (req, file, cb) => cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`),
			limits: 10
		},
		post: { name: 'post', maxCount: 10 },
		avatar: { name: 'avatar', maxCount: 1 },
	}
};