import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { OrderviewComponent } from './orderview/orderview.component';
import { RetailerviewComponent } from './retailerview/retailerview.component';
import { ProductviewComponent } from './productview/productview.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductService } from './services/productService';
import { RetailerService } from './services/retailerService';
import { OrderService } from './services/orderService';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    OrderviewComponent,
    RetailerviewComponent,
    ProductviewComponent,
    AddproductComponent,
    RoutingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService, RetailerService, OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
