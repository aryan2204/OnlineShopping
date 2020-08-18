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
import { RetailerviewComponent } from './retailer-view/retailer-view.component';
import {ProductService} from './services/productdetail.service';
import { RetailerService } from './services/retailor.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {RegistrationService} from './services/customer.service';
import {AuthenticationService} from './services/authentication.service';
import {SharedService} from './services/shared.service';
import { WishlistComponent } from './wishlist/wishlist.component'
import { WishlistDataService } from './services/wishlist.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AddressComponent } from './address/address.component';
import { OderHistoryComponent } from './oder-history/oder-history.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule  } from "ngx-spinner";
import { SearchComponent } from './search/search.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegistrationComponent } from './registration/registration.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginService } from './services/login.service';
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
    RetailerviewComponent,
    WishlistComponent,
    DashboardComponent,
    UserInfoComponent,
    AddressComponent,
    OderHistoryComponent,
    TopNavComponent,
    SearchComponent,
    UserLoginComponent,
    RegistrationComponent,
    PaymentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgbModule
  ],
  providers: [HomeService,OrderService,CartService,ProductService,RetailerService,RegistrationService
    ,AuthenticationService,SharedService,WishlistDataService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
