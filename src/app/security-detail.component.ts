import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
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

	newOwner: Owner = {name:null, share:null};

	addOwner() {
		this.security.owners.push({name:this.newOwner.name,share:this.newOwner.share});
		this.newOwner.name=null;
		this.newOwner.share=null;
        }

	complete() {
		this.security.completed = true;
	}

}
