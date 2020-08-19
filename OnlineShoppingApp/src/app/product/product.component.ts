import { ViewChild,Component, OnInit } from '@angular/core';
import {map} from "rxjs/operators";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {HomeModel} from '../models/Home.model';
import {HomeService} from '../services/home.service';
import {CartService} from '../services/cart.service';

declare let $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: Number;
  product;
  Pictures: any;


  @ViewChild('quantity') quantityInput;

  constructor(private route: ActivatedRoute,
              private productService: HomeService,
              private cartService: CartService) {


  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map((param: ParamMap) => {
        // @ts-ignore
        return param.params.id;
      })
    ).subscribe(prodId => {
      this.id = prodId;
      this.productService.getSingleProduct(this.id).subscribe(prod => {
        this.product = prod;
        

      });
    });
  }

addToCart(id: Number) {
  this.cartService.AddProductToCart(id, this.quantityInput.nativeElement.value);
  window.confirm('product added');
}
Increase() {
  let value = parseInt(this.quantityInput.nativeElement.value);
  if (this.product.Quantity >= 1){
    value++;

    if (value > this.product.Quantity) {
      // @ts-ignore
      value = this.product.Quantity;
    }
  } else {
    return;
  }

  this.quantityInput.nativeElement.value = value.toString();
}

Decrease() {
    let value = parseInt(this.quantityInput.nativeElement.value);
    if (this.product.Quantity > 0){
      value--;

      if (value <= 0) {
        // @ts-ignore
        value = 0;
      }
    } else {
      return;
    }
    this.quantityInput.nativeElement.value = value.toString();
  }
}





