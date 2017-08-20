import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop.component';
import { ProductService } from './product.service';
import { ProductsComponent } from './products.component';
import { LeasesComponent } from './leases.component';
import { LeaseService } from './lease.service';
import { AppRoutingModule }   from './app-routing.module';
import { SecurityComponent }   from './security.component';


@NgModule({
  declarations: [
  AppComponent,
  ShopComponent,
  ProductsComponent,
  LeasesComponent,
  SecurityComponent
  ],
  imports: [
  BrowserModule,
  HttpModule,
  InMemoryWebApiModule.forRoot(InMemoryDataService),
  AppRoutingModule
  ],
  providers: [ProductService, LeaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
