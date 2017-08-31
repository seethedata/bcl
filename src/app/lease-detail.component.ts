import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Lease } from './lease';
import { Owner } from './owner';


@Component({
    selector: 'app-lease-detail',
    templateUrl: './lease-detail.component.html',
    styleUrls: [ './lease-detail.component.css'],
})
export class LeaseDetailComponent {
    @Input() lease: Lease;

}
