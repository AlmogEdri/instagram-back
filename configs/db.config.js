module.exports = {
	dialect: 'sqlite',
	storage: '../data.sqlite',
	pool: {
		max: 5,
		min: 0,
		idle: 10000,
		acquire: 30000 // Max req time before before pool throw error 
	}
};