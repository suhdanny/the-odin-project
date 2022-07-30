const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./public'));

app.get('/', (req, res) => {
	res.sendFile(path.resolve('./index.html'));
});

app.get('/about', (req, res) => {
	res.sendFile(path.resolve('./about.html'));
});

app.get('/contact', (req, res) => {
	res.sendFile(path.resolve('./contact.html'));
});

app.all('*', (req, res) => {
	res.status(400).sendFile(path.resolve('./404.html'));
});

app.listen(3000, () => {
	console.log('Server is running on port 3000...');
});
