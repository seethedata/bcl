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
	res.json({products: [
     {name: 'PowerEdge 730xd', model: '730xd', image: '730xd.png', price: 250000, showLease: true},
     {name: 'VxRail G Series', model: 'vxrailg', image: 'vxrail.png', price: 450000, showLease: true},
     {name: 'VMAX 950', model: 'vmax950', image: 'vmax.png', price: 650000, showLease: true},
     {name: 'VxBlock 540', model: 'vxblock540', image: 'vxblock.png', price: 1000000, showLease: true}
    ]});
});

app.get('/api/securities', function(req, res){
	res.sendFile(path.join(__dirname,'test.html'));
});

app.get('*', function(req, res){
	res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(process.env.port || 8080);
