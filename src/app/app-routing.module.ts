import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShopComponent }   from './shop.component';
import { LeasesComponent }  from './leases.component';
import { SecurityComponent }  from './security.component';

const routes: Routes = [
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'shop',  component: ShopComponent },
  { path: 'leases',component: LeasesComponent },
  { path: 'security',component: SecurityComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
