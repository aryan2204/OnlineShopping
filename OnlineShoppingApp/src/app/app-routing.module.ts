import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { ThankyouComponent } from './thankout/thankout.component';
import {ProductViewComponent} from './product-view/product-view.component';
import {OrderViewComponent} from './order-view/order-view.component';
import {RetailerViewComponent} from './retailer-view/retailer-view.component';
import { AdminComponent } from './admin/admin.component';
import {WishlistComponent} from './wishlist/wishlist.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AddressComponent } from './address/address.component';
import {OderHistoryComponent} from './oder-history/oder-history.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {
    path: '',component: HomeComponent
  },
  {
    path: 'product/:id',component: ProductComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'thankyou', component: ThankyouComponent
  },
  { 
    path: "productdetails", component:ProductViewComponent
  },
  {
     path: "ordersdetails", component:OrderViewComponent
  },
  { 
    path: "retailerdetails", component:RetailerViewComponent
  },
  {
    path: "admin",component: AdminComponent
  },
  {
    path: "wishlist",component: WishlistComponent
  },
  {
    path: "user",component: UserDashboardComponent
  },
  {
    path: "user/info",component: UserInfoComponent
  },
  {
    path: "user/address",component: AddressComponent
  },
  {
  path: "user/ordershistory",component: OderHistoryComponent
  },
  {
    path: "userlogin",component: UserLoginComponent
  },
  {
    path: "registration",component: RegistrationComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
