import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let products = [
     {name: "PowerEdge 730xd", model: "730xd", image: "730xd.png", price: 250000, showLease: true},
     {name: "VxRail G Series", model: "vxrailg", image: "vxrail.png", price: 450000, showLease: true},
     {name: "VMAX 950", model: "vmax950", image: "vmax.png", price: 650000, showLease: true},
     {name: "VxBlock 540", model: "vxblock540", image: "vxblock.png", price: 1000000, showLease: true}
    ];
    let leases = [
    {product:{name:"Dummy",model:"Dummy", image:"Dummy", price: 0, showLease: true},duration:50},
    {product:{name:"Dummy",model:"Dummy", image:"Dummy", price: 0, showLease: true},duration:50},
    {product:{name:"Dummy",model:"Dummy", image:"Dummy", price: 0, showLease: true},duration:50},
    {product:{name:"Dummy",model:"Dummy", image:"Dummy", price: 0, showLease: true},duration:50},
    {product:{name:"Dummy",model:"Dummy", image:"Dummy", price: 0, showLease: true},duration:50}
    ];
    let securities = [
    	{	leases:[
    		{product:{name:"PowerEdge 730xd",model:"730xd", image:"730xd.png", price: 250000, showLease: true},duration:48},
    		{product:{name:"VxRail G Series",model:"vxrailg", image:"vxrail.png", price: 450000, showLease: true},duration:48},
    		{product:{name:"VMAX 950",model:"vmax950", image:"vmax.png", price: 650000, showLease: true},duration:48}
		],
		owners:[
		{name:"Owner1", share:0.25},
		{name:"Owner2", share:0.25},
		{name:"Owner3", share:0.25},
		{name:"Owner4", share:0.25},
		]
	},
    	{	leases:[
    		{product:{name:"VxBlock 540",model:"vxblock540", image:"vxblock.png", price: 1000000, showLease: true},duration:48},
    		{product:{name:"VMAX 950",model:"vmax950", image:"vmax.png", price: 650000, showLease: true},duration:48}
		],
		owners:[
		{name:"Owner1", share:0.1},
		{name:"Owner2", share:0.25},
		{name:"Owner3", share:0.25}
		]
	}
    ];
    return {products, leases, securities};
  }
}

