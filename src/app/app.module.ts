import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopComponent } from './shop.component';
import { ProductService } from './product.service';
import { ProductsComponent } from './products.component';

@NgModule({
  declarations: [
  AppComponent,
  ShopComponent,
  ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
