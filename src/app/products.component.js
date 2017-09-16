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
import { ProductService } from './product.service';
import { LeaseService } from './lease.service';
var ProductsComponent = (function () {
    function ProductsComponent(productService, leaseService) {
        this.productService = productService;
        this.leaseService = leaseService;
        this.selectedDuration = 36;
    }
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts().then(function (products) { return _this.products = products; });
    };
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent.prototype.hideLease = function (product) {
        this.selectedProduct = product;
        this.selectedProduct.showLease = false;
    };
    ProductsComponent.prototype.showLease = function (product) {
        this.selectedProduct = product;
        this.selectedProduct.showLease = true;
    };
    ProductsComponent.prototype.addLease = function (product) {
        this.selectedProduct = product;
        this.leaseService.add({ product: product, duration: this.selectedDuration, assigned: true });
    };
    ProductsComponent.prototype.setDuration = function (duration) {
        this.selectedDuration = duration;
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    Component({
        selector: 'app-products',
        templateUrl: './products.component.html',
        styleUrls: ['./products.component.css'],
        providers: [ProductService, LeaseService]
    }),
    __metadata("design:paramtypes", [ProductService, LeaseService])
], ProductsComponent);
export { ProductsComponent };
//# sourceMappingURL=products.component.js.map