import { Component } from '@angular/core';
import { Lease } from './lease';
import { LeaseService } from './lease.service';

@Component({
	selector: 'shop',
	templateUrl: './shop.component.html',
	providers: [LeaseService]
})
export class ShopComponent {
	constructor(private leaseService: LeaseService){};
	leases: Lease[] = [];

	getLeases(): void {
                this.leaseService.getLeases().then(leases=>this.leases=leases);
        }

}
