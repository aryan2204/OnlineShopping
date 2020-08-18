import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {CartModel} from "../models/cart.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartData: CartModel;
  cartTotal: Number;
  subTotal: Number;
  
  constructor(public cartService: CartService) {
  }

  ngOnInit() {
     this.cartService.cartDataObs$.subscribe(data => this.cartData = data);
     this.cartService.cartTotal$.subscribe(total => this.cartTotal = total);
  }

  ChangeQuantity(Product_Id: Number, increaseQuantity: Boolean) {
    this.cartService.UpdateCartData(Product_Id, increaseQuantity);
  }


}