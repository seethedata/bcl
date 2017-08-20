import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Lease } from './lease';
import { LeaseService } from './lease.service';
import { Security } from './security';


@Component({
	selector: 'securities',
	templateUrl: './security.component.html',
	providers: [ LeaseService ],
})
export class SecurityComponent implements OnInit{
	unassignedLeases: Lease[] = [];
	securities: Security[] = [];

	constructor(private leaseService: LeaseService){}

	getLeases(): void {
		this.leaseService.getUnassignedLeases()
		.then((leases)=>this.unassignedLeases = leases);
	}

	ngOnInit(): void {
		this.getLeases();
	}
}
