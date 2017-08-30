import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Security } from './security';
import { Owner } from './owner';


@Component({
	selector: 'security-detail',
	templateUrl: './security-detail.component.html',
	styleUrls: [ './security-detail.component.css'],
})
export class SecurityDetailComponent {
	@Input() security: Security;

	addOwner(ownerName: string, ownerShare: number) {
	var newOwner: Owner =  {name:ownerName, share:ownerShare};
        this.security.owners.push(newOwner);
        }

	complete() {
		this.security.completed = true;
	}

}
