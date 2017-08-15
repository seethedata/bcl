import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';

@Component({
	selector: 'products',
	templateUrl: 'products.component.html',
        providers: [ProductService]
})
export class ProductsComponent implements OnInit{
        products: Product[];

        constructor(private productService: ProductService){}
        getProducts(): void {
                this.products = this.productService.getProducts();
        }
        ngOnInit(): void {
                this.getProducts();
        }
	
}


