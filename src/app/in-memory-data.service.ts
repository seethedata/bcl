import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let products = [
     {name: "PowerEdge 730xd", model: "730xd", image: "730xd.png", price: 250000, showLease: true},
     {name: "VxRail G Series", model: "vxrailg", image: "vxrail.png", price: 450000, showLease: true},
     {name: "VMAX 950", model: "vmax950", image: "vmax.png", price: 650000, showLease: true},
     {name: "VxBlock 540", model: "vxblock540", image: "vxblock.png", price: 1000000, showLease: true}
    ];
    return {products};
  }
}

