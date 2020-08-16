import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {CartModel} from "../models/cart.model";
import {Router} from "@angular/router";
import {OrderService} from "../services/order.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  cartData: CartModel;
  cartTotal: Number;
  showSpinner: Boolean;
  constructor(private cartService: CartService,
              private orderService: OrderService,
              private router: Router) {  }

  ngOnInit() {
    this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
    this.cartService.cartTotal$.subscribe(Total_Amount => this.cartTotal = Total_Amount);
  }
  }