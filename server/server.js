const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
const app = express();
app.use(cors());
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL);
const bp = require('body-parser');

app.use(bp.json());

app.get('/', (request, response) => {
	response.json('You are on the root of the Fortune Cookies Server');
});

app.listen(PORT, () => {
	console.log('LISTENING ON PORT ' + PORT);
});
