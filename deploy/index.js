const express = require('express');
const app = express();
const http = require('http');
const httpServer = http.Server(app);

const path = require('path');

app.set('assets',__dirname + "./assets");

app.use(express.static(__dirname));

app.get('/api/leases', function(req, res){
	res.sendFile(path.join(__dirname,'test.html'));
});

app.get('/api/products', function(req, res){
	res.sendFile(path.join(__dirname,'test.html'));
});

app.get('/api/securities', function(req, res){
	res.sendFile(path.join(__dirname,'test.html'));
});

app.get('*', function(req, res){
	res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(process.env.port || 8080);
