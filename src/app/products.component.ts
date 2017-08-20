import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';
import { Lease } from './lease';
import { LeaseService } from './lease.service';

@Component({
	selector: 'products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css'],
	providers: [ProductService, LeaseService]
})
export class ProductsComponent implements OnInit{
        products: Product[];

	selectedProduct: Product;
	selectedDuration: number = 36;

        constructor(private productService: ProductService, private leaseService: LeaseService){}

        getProducts(): void {
		this.productService.getProducts().then(products=>this.products=products);
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
	console.log("AddLease");
		this.selectedProduct=product;
		let newLease = new Lease(product, this.selectedDuration);
		this.leaseService.add(newLease);
	}

	setDuration(duration: number): void {
		this.selectedDuration=duration;
	}

}



