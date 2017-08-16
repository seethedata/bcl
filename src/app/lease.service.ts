import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Lease } from './lease';


@Injectable()
export class LeaseService {
	private leasesUrl='api/leases';
	
	constructor(private http: Http){ }

	getLeases(): Promise<Lease[]> {
		return this.http.get(this.leasesUrl)
			.toPromise()
			.then(response=>response.json().data as Lease[])
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
    		return Promise.reject(error.message || error);
	}
}
