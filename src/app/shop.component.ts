import { Component } from '@angular/core';

import { Product } from './product';
import { Lease } from './lease';
import { LeaseService } from './lease.service';

@Component({
	selector: 'shop',
	templateUrl: './shop.component.html',
	providers: [LeaseService]
})
export class ShopComponent {
	constructor(leaseService: LeaseService) {}
}
