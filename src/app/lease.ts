import { Product } from './product';

export class Lease {
constructor(	
	public product: Product,
	public duration: number,
	public assigned: boolean
	){ }
}
