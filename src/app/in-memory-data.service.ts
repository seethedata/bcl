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
    {product:{name:"PowerEdge 730xd",model:"730xd", image:"730xd.png", price: 250000, showLease: true},duration:36, assigned: false},
    {product:{name:"VxRail G Series",model:"vxrailg", image:"vxrail.png", price: 450000, showLease: true},duration:48, assigned: false},
    {product:{name:"VMAX950",model:"vmax950", image:"vmax.png", price: 650000, showLease: true},duration:60, assigned: false},
    {product:{name:"VxBlock 540",model:"vxblock540", image:"vxblock.png", price: 1000000, showLease: true},duration:48, assigned: true},
    {product:{name:"VMAX950",model:"vmax950", image:"vmax.png", price: 650000, showLease: true},duration:36, assigned: true}
    ];
    let securities = [
    	{	leases:[
    		{product:{name:"PowerEdge 730xd",model:"730xd", image:"730xd.png", price: 250000, showLease: true},duration:48, assigned: true},
    		{product:{name:"VxRail G Series",model:"vxrailg", image:"vxrail.png", price: 450000, showLease: true},duration:48, assigned: true},
    		{product:{name:"VMAX 950",model:"vmax950", image:"vmax.png", price: 650000, showLease: true},duration:48, assigned: true}
		],
		owners:[
		{name:"Owner1", share:0.25},
		{name:"Owner2", share:0.25},
		{name:"Owner3", share:0.25},
		{name:"Owner4", share:0.25},
		]
	},
    	{	leases:[
    		{product:{name:"VxBlock 540",model:"vxblock540", image:"vxblock.png", price: 1000000, showLease: true},duration:48, assigned: true},
    		{product:{name:"VMAX 950",model:"vmax950", image:"vmax.png", price: 650000, showLease: true},duration:48, assigned: true}
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

