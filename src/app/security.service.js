var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
var SecurityService = (function () {
    function SecurityService(http) {
        this.http = http;
        this.securitiesUrl = 'api/securities';
    }
    SecurityService.prototype.getSecurityList = function () {
        return this.http.get(this.securitiesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    SecurityService.prototype.add = function (security) {
        var headers = new Headers({ 'Content-Type': 'application/json' });
        var options = new RequestOptions({ headers: headers });
        return this.http.post(this.securitiesUrl, JSON.stringify(security), options).toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    SecurityService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    SecurityService.prototype.extractData = function (res) {
        var body = res.json();
        console.log('Response:' + JSON.stringify(body.data) || {});
    };
    return SecurityService;
}());
SecurityService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], SecurityService);
export { SecurityService };
//# sourceMappingURL=security.service.js.map