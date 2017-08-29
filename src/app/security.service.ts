import { Injectable }    from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Security } from './security';
import { Product } from './product';


@Injectable()
export class SecurityService {
	private securitiesUrl='api/securities';
	constructor(private http: Http){ }

	getSecurityList(): Promise<Security[]> {
		return this.http.get(this.securitiesUrl)
			.toPromise()
			.then(response=>response.json().data as Security[])
			.catch(this.handleError);
	}

	add(security: Security) : Promise<Security> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
    		let options = new RequestOptions({ headers: headers });
		return this.http.post(this.securitiesUrl,JSON.stringify(security), options).toPromise()
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
