import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {OrderService} from "../services/order.service";

@Component({
  selector: 'mg-thankyou',
  templateUrl: './thankout.component.html',
  styleUrls: ['./thankout.component.css']
})
export class ThankyouComponent implements OnInit {
  message: String;
  orderId: Number;
  products;
  cartTotal;
  constructor(private router: Router,
              private orderService: OrderService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
      message: String,
      products: ProductResponseModel[],
      OrderNumber: Number,
      total: Number
    };

    this.message = state.message;
    this.orderId = state.OrderNumber;
    this.products = state.products;
    this.cartTotal = state.total;
    console.log(this.products);
  }

  ngOnInit() {

  }

}

interface ProductResponseModel {
  Product_Id: Number;
  Product_Name: String;
  Product_Description: String;
  Unit_Price: Number;
  Quatity: Number;
  Pictures: String;
}