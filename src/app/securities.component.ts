import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Security } from './security';
import { Owner } from './owner';
import { SecurityService } from './security.service';

@Component({
    templateUrl: './securities.component.html',
    styleUrls: [ './securities.component.css' ],
    providers: [ SecurityService ]
})

export class SecuritiesComponent implements OnInit {
    selectedSecurity: Security;
    securities: Security[];

    constructor(private securityService: SecurityService) {}

    onSelect(security: Security): void {
        this.selectedSecurity = security;
    }

    getSecurities(): void {
        this.securityService.getSecurityList()
         .then((securityList) => this.securities = securityList);
    }

    ngOnInit(): void {
            this.getSecurities();
    }
}


