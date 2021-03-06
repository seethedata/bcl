import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop.component';
import { ProductService } from './product.service';
import { ProductsComponent } from './products.component';
import { LeasesComponent } from './leases.component';
import { LeaseDetailComponent } from './lease-detail.component';
import { LeaseService } from './lease.service';
import { SecurityService} from './security.service';
import { AppRoutingModule } from './app-routing.module';
import { SecurityComponent } from './security.component';
import { SecuritiesComponent } from './securities.component';
import { SecurityDetailComponent } from './security-detail.component';


@NgModule({
  declarations: [
  AppComponent,
  ShopComponent,
  ProductsComponent,
  LeasesComponent,
  LeaseDetailComponent,
  SecurityComponent,
  SecuritiesComponent,
  SecurityDetailComponent
  ],
  imports: [
  BrowserModule,
  HttpModule,
  FormsModule,
  AppRoutingModule
  ],
  providers: [ProductService, LeaseService, SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
