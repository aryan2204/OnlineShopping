import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import {HomeService} from './services/home.service';
import { ToastrModule } from 'ngx-toastr';
import {OrderService} from './services/order.service';
import {CartService} from './services/cart.service';
import { CartComponent } from './cart/cart.component';
import { ThankyouComponent } from './thankout/thankout.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { RetailerViewComponent } from './retailer-view/retailer-view.component';
import {ProductService} from './services/productdetail.service';
import { RetailerService } from './services/retailor.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RegistrationService} from './services/customer.service';
import {AuthenticationService} from './services/authentication.service';
import {SharedService} from './services/shared.service';
import { WishlistComponent } from './wishlist/wishlist.component'
import { WishlistDataService } from './services/wishlist.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    FooterComponent,
    CartComponent,
    ThankyouComponent,
    CheckoutComponent,
    UserDashboardComponent,
    AdminComponent,
    ProductViewComponent,
    OrderViewComponent,
    RetailerViewComponent,
    WishlistComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [HomeService,OrderService,CartService,ProductService,RetailerService,RegistrationService
    ,AuthenticationService,SharedService,WishlistDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
