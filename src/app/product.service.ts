import { Injectable }    from '@angular/core';
import { Product } from './product';
import { PRODUCTS } from './product-list';

@Injectable()
export class ProductService {
	getProducts(): Product[] {
		return PRODUCTS;
	}
}
