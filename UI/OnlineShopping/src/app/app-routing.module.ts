import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductviewComponent } from './productview/productview.component';
import { OrderviewComponent } from './orderview/orderview.component';
import { RetailerviewComponent } from './retailerview/retailerview.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  // { path: '', component: AdminComponent},
  { path: "product", component:ProductviewComponent},
  { path: "orders", component:OrderviewComponent},
  { path: "retailer", component:RetailerviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
RoutingComponent = [ProductviewComponent,OrderviewComponent,RetailerviewComponent];