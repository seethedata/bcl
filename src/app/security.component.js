var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { LeaseService } from './lease.service';
import { SecurityService } from './security.service';
var SecurityComponent = (function () {
    function SecurityComponent(leaseService, securityService) {
        this.leaseService = leaseService;
        this.securityService = securityService;
        this.unassignedLeases = [];
        this.leases = [];
        this.security = { name: '', leases: [], owners: [], completed: false };
    }
    SecurityComponent.prototype.getLeases = function () {
        var _this = this;
        this.leaseService.getUnassignedLeases()
            .then(function (leases) { return _this.unassignedLeases = leases; });
    };
    SecurityComponent.prototype.ngOnInit = function () {
        this.getLeases();
    };
    SecurityComponent.prototype.addLease = function () {
        this.selectedLease.assigned = true;
        this.leases.push(this.selectedLease);
        this.selectedLease = null;
    };
    SecurityComponent.prototype.removeLease = function () {
        var selectedLease = this.selectedLease;
        selectedLease.assigned = false;
        var index = this.leases.indexOf(selectedLease);
        this.leases.splice(index, 1);
        selectedLease = null;
    };
    SecurityComponent.prototype.onSelect = function (lease) {
        this.selectedLease = lease;
    };
    SecurityComponent.prototype.saveSecurity = function () {
        this.securityService.add({ name: this.security.name, leases: this.leases, owners: [], completed: false });
    };
    return SecurityComponent;
}());
SecurityComponent = __decorate([
    Component({
        selector: 'app-security',
        templateUrl: './security.component.html',
        providers: [LeaseService, SecurityService],
        styleUrls: ['./security.component.css'],
    }),
    __metadata("design:paramtypes", [LeaseService, SecurityService])
], SecurityComponent);
export { SecurityComponent };
//# sourceMappingURL=security.component.js.map