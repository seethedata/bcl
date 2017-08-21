import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';

import { Lease } from './lease';
import { LeaseService } from './lease.service';
import { Security } from './security';
import { LeasesComponent } from './leases.component';


@Component({
	selector: 'securities',
	templateUrl: './security.component.html',
	providers: [ LeaseService ],
	styleUrls: [ './security.component.css'],
})
export class SecurityComponent implements OnInit{
	unassignedLeases: Lease[] = [];
	leases: Lease[] = [];
	@ViewChild(LeasesComponent) vc:LeasesComponent;
	selectedLease: Lease;

	constructor(private leaseService: LeaseService){}

	getLeases(): void {
		this.leaseService.getUnassignedLeases()
		.then((leases)=>this.unassignedLeases = leases);
	}

	ngOnInit(): void {
		this.getLeases();
	}

	addLease(): void {
		var selectedLease = this.vc.selectedLease;
		selectedLease.assigned = true;
		this.leases.push(selectedLease);
		selectedLease=null;
	}

	onSelect(lease: Lease): void {
                this.selectedLease = lease;
        }

}
