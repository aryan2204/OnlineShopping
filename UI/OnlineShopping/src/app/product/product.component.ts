import { ViewChild,Component, OnInit } from '@angular/core';
import {map} from "rxjs/operators";
import {ActivatedRoute, ParamMap} from "@angular/router";
import { Router } from '@angular/router';
import {HomeService} from '../services/home.service';
import {CartService} from '../services/cart.service';
import { SharedService } from '../services/shared.service';

declare let $: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: Number;
  Customerid;
  product;
  Pictures: any;
  public service;

  @ViewChild('quantity') quantityInput;

  constructor(private route: ActivatedRoute,private routes:Router,
              private productService: HomeService,
              private cartService: CartService,private sharedService:SharedService) 
  {
    this.service= sharedService;

  }

  ngOnInit(): void {
    this.Customerid=this.sharedService.getCustomerId();
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
  if(this.Customerid==null)
    {
      this.routes.navigate(["/userlogin"]);
    }
    else{
          this.cartService.AddProductToCart(id, this.quantityInput.nativeElement.value);
          window.confirm('product added');
}
}
addToWishList(id: Number) {
  if(this.Customerid==null)
    {
      this.routes.navigate(["/userlogin"]);
    }
    else{
          this.cartService.AddProductWishList(id);
          window.confirm('product added to wishlist');
}
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





