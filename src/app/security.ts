import { Lease } from './lease';
import { Owner } from './owner';

export class Security {
constructor(
    public name: string,
    public leases: Lease[],
    public owners: Owner[],
    public completed: boolean
    ) { }
}
