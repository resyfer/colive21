require('dotenv').config({ path: './config/.env' });

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

(async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log('DB Connected');

		const app = express();
		app.use(cors());

		app.get('/', (req, res) => {
			res.status(200).send('Hello World');
		});

		app.listen(process.env.PORT, () => {
			console.log(
				`Server connected at port ${process.env.PORT} in mode ${process.env.NODE_ENV}`
			);
		});
	} catch (err) {
		console.log(err);
	}
})();
