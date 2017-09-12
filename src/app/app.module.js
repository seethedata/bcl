var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop.component';
import { ProductService } from './product.service';
import { ProductsComponent } from './products.component';
import { LeasesComponent } from './leases.component';
import { LeaseDetailComponent } from './lease-detail.component';
import { LeaseService } from './lease.service';
import { SecurityService } from './security.service';
import { AppRoutingModule } from './app-routing.module';
import { SecurityComponent } from './security.component';
import { SecuritiesComponent } from './securities.component';
import { SecurityDetailComponent } from './security-detail.component';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
            InMemoryWebApiModule.forRoot(InMemoryDataService),
            AppRoutingModule
        ],
        providers: [ProductService, LeaseService, SecurityService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map