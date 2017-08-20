import { Lease } from './lease';
import { Owner } from './owner';

export class Security {
constructor(	
	public leases: Lease[],
	public owners: Owner[]
	){ }
}
