import { Injectable }    from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Lease } from './lease';
import { Product } from './product';


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

	add(lease: Lease) : Promise<Lease> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
    		let options = new RequestOptions({ headers: headers });
		return this.http.post(this.leasesUrl,JSON.stringify(lease), options).toPromise()
			.then(this.extractData)
                	.catch(this.handleError);
        }

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
    		return Promise.reject(error.message || error);
	}

	private extractData(res: Response) : void{
		let body = res.json();
        	console.log("Response:" + JSON.stringify(body.data) || {});
    	}
}
