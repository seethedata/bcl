const express = require('express');
const app = express();
const http = require('http');
const httpServer = http.Server(app);

const path = require('path');

app.set('assets',__dirname + "./assets");

app.use(express.static(__dirname));

app.get('/api/securities', function(req, res){
	res.jsonp({ data: [
    {   name: 'The First Security',
        leases: [
            {   product: {name: 'PowerEdge 730xd', model: '730xd', image: '730xd.png', price: 250000, showLease: true},
                duration: 48,
                assigned: true
            },
            {   product: {name: 'VxRail G Series', model: 'vxrailg', image: 'vxrail.png', price: 450000, showLease: true},
                duration: 48,
                assigned: true
            },
            {   product: {name: 'VMAX 950', model: 'vmax950', image: 'vmax.png', price: 650000, showLease: true},
                duration: 48,
                assigned: true
            }
        ],
        owners: [
            {name: 'John S', share: 25},
            {name: 'Jane D', share: 25},
            {name: 'Rich R', share: 25},
            {name: 'Steve A', share: 25},
        ],
        completed: true
    },
    {name: 'Second Security',
        leases: [
            {product: {name: 'VxBlock 540', model: 'vxblock540', image: 'vxblock.png', price: 1000000, showLease: true},
            duration: 48,
            assigned: true
            },
            {product: {name: 'VMAX 950', model: 'vmax950', image: 'vmax.png', price: 650000, showLease: true},
            duration: 48,
            assigned: true
            }
        ],
        owners: [
            {name: 'John S', share: 10},
            {name: 'Jane D', share: 70},
            {name: 'Rich R', share: 20}
        ],
        completed: true
    },
    {name: 'A New Security',
        leases: [
            {product: {name: 'VxBlock 540', model: 'vxblock540', image: 'vxblock.png', price: 1000000, showLease: true},
            duration: 48,
            assigned: true
            },
            {product: { name: 'VMAX 950', model: 'vmax950', image: 'vmax.png', price: 650000, showLease: true },
            duration: 48,
            assigned: true
            }
        ],
        owners: [],
        completed: false
    }
    ]});
});

app.get('/api/products', function(req, res){
	res.jsonp({data: [
     {name: 'PowerEdge 730xd', model: '730xd', image: '730xd.png', price: 250000, showLease: true},
     {name: 'VxRail G Series', model: 'vxrailg', image: 'vxrail.png', price: 450000, showLease: true},
     {name: 'VMAX 950', model: 'vmax950', image: 'vmax.png', price: 650000, showLease: true},
     {name: 'VxBlock 540', model: 'vxblock540', image: 'vxblock.png', price: 1000000, showLease: true}
    ]});
});

app.get('/api/leases', function(req, res){
	res.jsonp({data: [
        {   product: {name: 'PowerEdge 730xd', model: '730xd', image: '730xd.png', price: 250000, showLease: true},
            duration: 36,
            assigned: false
        },
        {   product: {name: 'VxRail G Series', model: 'vxrailg', image: 'vxrail.png', price: 450000, showLease: true},
            duration: 48,
            assigned: false
        },
        {   product: {name: 'VMAX950', model: 'vmax950', image: 'vmax.png', price: 650000, showLease: true},
            duration: 60,
            assigned: false
        },
        {   product: {name: 'VxBlock 540', model: 'vxblock540', image: 'vxblock.png', price: 1000000, showLease: true},
            duration: 48,
            assigned: true},
        {   product: {name: 'VMAX950', model: 'vmax950', image: 'vmax.png', price: 650000, showLease: true},
            duration: 36,
            assigned: true
        }
    ]});
});

app.get('*', function(req, res){
	res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(process.env.port || 8080);
