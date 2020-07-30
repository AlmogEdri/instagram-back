const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const corsOptions = {
	origin: 'http://localhost:3000'
};

// Middleware import.
const { error404, globalHeader } = require('./middlewares');

// Routes imports
const authRoute = require('./routes/authRoute');
const postRoute = require('./routes/postRoute');

// Define the database.
const db = require('./models');

const app = express();

// Middleware
app.use(cors(corsOptions));
app.use(globalHeader);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/auth', authRoute);
app.use('/post', postRoute);

// Catch 404 and forward to error handler
app.use(error404);

const PORT = process.env.PORT || 8080;

db.sequelize
	// .sync({ force: true })
	.sync()
	.then(() => {
		app.listen(PORT, () => console.log(`Server is listen on port: ${PORT}`))
	});