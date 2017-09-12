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
import { Input } from '@angular/core';
import { Security } from './security';
var SecurityDetailComponent = (function () {
    function SecurityDetailComponent() {
        this.newOwner = { name: null, share: null };
    }
    SecurityDetailComponent.prototype.addOwner = function () {
        this.security.owners.push({ name: this.newOwner.name, share: this.newOwner.share });
        this.newOwner.name = null;
        this.newOwner.share = null;
    };
    SecurityDetailComponent.prototype.complete = function () {
        this.security.completed = true;
    };
    return SecurityDetailComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", Security)
], SecurityDetailComponent.prototype, "security", void 0);
SecurityDetailComponent = __decorate([
    Component({
        selector: 'app-security-detail',
        templateUrl: './security-detail.component.html',
        styleUrls: ['./security-detail.component.css'],
    })
], SecurityDetailComponent);
export { SecurityDetailComponent };
//# sourceMappingURL=security-detail.component.js.map