const express = require('express');
const app = express();
const http = require('http');
const httpServer = http.Server(app);

const path = require('path');
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const eth = require('./eth.js');
const dummy = require('./dummy.js');

app.set('assets',__dirname + "./assets");

app.use(express.static(__dirname));

app.get('/api/securities', function(req,res) {dummy.getSecurities(req, res);});
app.get('/api/products', function(req,res) {dummy.getProducts(req,res);});
app.get('/api/leases', function(req,res) {dummy.getLeases(req,res);});
app.post('/api/leases/add', function(req,res) {eth.addLease(req,res);});

app.get('*', function(req, res){
	res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(process.env.PORT);
