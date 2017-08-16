import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Product } from './product';
import { Lease } from './lease';
import { LeaseService } from './lease.service';

@Component({
	selector: 'leases',
	templateUrl: './leases.component.html',
	providers: [LeaseService]
})
export class LeasesComponent implements OnInit{
        leases: Lease[];

	selectedLease: Lease;

        constructor(private leaseService: LeaseService){}

        getLeases(): void {
		this.leaseService.getLeases().then(leases=>this.leases=leases);
        }

        ngOnInit(): void {
                this.getLeases();
        }
}


