import { InMemoryDbService } from 'angular-in-memory-web-api';
export class LeaseInMemoryDataService implements InMemoryDbService {
  createDb() {
    let leases= [{}];
    return {leases};
  }
}

