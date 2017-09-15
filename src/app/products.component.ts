import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';
import { Lease } from './lease';
import { LeaseService } from './lease.service';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
    providers: [ProductService, LeaseService]
})
export class ProductsComponent implements OnInit {
    products: Product[];

    selectedProduct: Product;
    selectedDuration = 36;

    constructor(private productService: ProductService, private leaseService: LeaseService) {}

    getProducts(): void {
        this.productService.getProducts().then(products => this.products = products);
        this.productService.getProducts().then(products => console.log(products));
    }

    ngOnInit(): void {
        this.getProducts();
    }

    hideLease(product: Product): void {
        this.selectedProduct = product;
        this.selectedProduct.showLease = false;
    }

    showLease(product: Product): void {
        this.selectedProduct = product;
        this.selectedProduct.showLease = true;
    }

    addLease(product: Product): void {
        this.selectedProduct = product;
        this.leaseService.add({product: product, duration: this.selectedDuration, assigned: true});
    }

    setDuration(duration: number): void {
        this.selectedDuration = duration;
    }

}

