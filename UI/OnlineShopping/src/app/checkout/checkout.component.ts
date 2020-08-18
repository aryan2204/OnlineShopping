import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {CartModel} from "../models/cart.model";
import {Router} from "@angular/router";
import {OrderService} from "../services/order.service";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartData: CartModel;
  cartTotal: Number;
  constructor(private cartService: CartService,
              private orderService: OrderService,private SpinnerService: NgxSpinnerService,
              private router: Router) {  }

  ngOnInit() {
    this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
    this.cartService.cartTotal$.subscribe(Total_Amount => this.cartTotal = Total_Amount);
  }
  onCheckout() {
    //this.SpinnerService.show();
      window.alert("Payment Done");
       //this.SpinnerService.hide();  
     };
  }
