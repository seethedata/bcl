import { Component, Input } from '@angular/core';

import { Security } from './security';

@Component({
	templateUrl: './securities.component.html',
	styleUrls: [ './securities.component.css' ]
})
export class SecuritiesComponent{
	@Input() securities: Security[];

	selectedSecurity: Security;

	onSelect(security: Security): void {
		this.selectedSecurity= security;
	}

}


