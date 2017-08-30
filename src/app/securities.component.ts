import { Component } from '@angular/core';

import { Security } from './security';
import { Owner } from './owner';
import { SecurityService } from './security.service';

@Component({
	templateUrl: './securities.component.html',
	styleUrls: [ './securities.component.css' ],
	providers: [ SecurityService ]
})
export class SecuritiesComponent{
	selectedSecurity: Security;
	securities: Security[];
	
	constructor(private securityService: SecurityService){}

	onSelect(security: Security): void {
		this.selectedSecurity= security;
	}

        getSecurities(): void {
                this.securityService.getSecurityList()
                .then((securityList)=>this.securities= securityList);
        }

        ngOnInit(): void {
                this.getSecurities();
        }


	addOwner(ownerName: string, ownerShare: number) {
	var newOwner: Owner;
	newOwner.name=ownerName;
	newOwner.share=ownerShare;
	this.selectedSecurity.owners.push(newOwner);
	}

}


