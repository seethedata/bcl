import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Lease } from './lease';
import { Security } from './security';
import { SecurityService } from './security.service';


@Component({
	selector: 'security-list',
	templateUrl: './security-list.component.html',
	providers: [ SecurityService ],
	styleUrls: [ './security-list.component.css'],
})
export class SecurityListComponent implements OnInit{
	securityList: Security[];
	selectedSecurity: Security;

	constructor(private securityService: SecurityService){}

	getSecurities(): void {
		this.securityService.getSecurityList()
		.then((securityList)=>this.securityList= securityList);
	}

	ngOnInit(): void {
		this.getSecurities();
	}

	onSelect(security: Security): void {
                this.selectedSecurity = security;
        }

}
