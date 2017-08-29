import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { Lease } from './lease';
import { LeaseService } from './lease.service';
import { Security } from './security';
import { SecurityService } from './security.service';
import { LeasesComponent } from './leases.component';


@Component({
	selector: 'securities',
	templateUrl: './security.component.html',
	providers: [ LeaseService, SecurityService ],
	styleUrls: [ './security.component.css'],
})
export class SecurityComponent implements OnInit{
	unassignedLeases: Lease[] = [];
	leases: Lease[] = [];
	@ViewChild(LeasesComponent) vc:LeasesComponent;
	selectedLease: Lease;
	security: Security = {name: "Default", leases: [], owners: []};


	constructor(private leaseService: LeaseService, private securityService: SecurityService){}

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

	removeLease(): void {
		var selectedLease = this.selectedLease;
		selectedLease.assigned = false;
		var index = this.leases.indexOf(selectedLease)
		this.leases.splice(index, 1);
		selectedLease=null;
	}

	onSelect(lease: Lease): void {
                this.selectedLease = lease;
        }

	saveSecurity() {
	this.securityService.add({name: this.security.name,leases: this.leases, owners:[]});	

	}
}
