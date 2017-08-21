import { Component, Input } from '@angular/core';

import { Product } from './product';
import { Lease } from './lease';

@Component({
	selector: 'leases',
	templateUrl: './leases.component.html',
	styleUrls: [ './leases.component.css' ]
})
export class LeasesComponent{
	@Input() leases: Lease[];

	selectedLease: Lease;

	onSelect(lease: Lease): void {
		this.selectedLease = lease;
	}

}


