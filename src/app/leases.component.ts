import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Product } from './product';
import { Lease } from './lease';
import { LeaseService } from './lease.service';

@Component({
    selector: 'app-leases',
    templateUrl: './leases.component.html',
    styleUrls: [ './leases.component.css' ],
    providers: [ LeaseService ]
})
export class LeasesComponent implements OnInit {
    leases: Lease[];

    selectedLease: Lease;

    constructor(private leaseService: LeaseService) {}

    getLeases(): void {
        this.leaseService.getLeases()
        .then((leases) => this.leases = leases);
    }

    ngOnInit(): void {
        this.getLeases();
    }

    onSelect(lease: Lease) {
        this.selectedLease = lease;
    }

}


