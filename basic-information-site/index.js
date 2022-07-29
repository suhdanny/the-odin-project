const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		fs.readFile('index.html', 'utf8', (err, data) => {
			if (err) return;
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			return res.end();
		});
	} else if (req.url === '/about') {
		fs.readFile('about.html', 'utf8', (err, data) => {
			if (err) return;
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			return res.end();
		});
	} else if (req.url === '/contact') {
		fs.readFile('contact.html', 'utf8', (err, data) => {
			if (err) return;
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			return res.end();
		});
	} else {
		fs.readFile('404.html', 'utf8', (err, data) => {
			if (err) return;
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.write(data);
			return res.end();
		});
	}
});

server.listen(port);
