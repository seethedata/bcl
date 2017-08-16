import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
	selector: 'products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css'],
	providers: [ProductService]
})
export class ProductsComponent implements OnInit{
        products: Product[];

	selectedProduct: Product;

        constructor(private productService: ProductService){}

        getProducts(): void {
                this.products = this.productService.getProducts();
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
	
}


