import {Injectable} from '@angular/core';
import {HomeService} from "./home.service";
import {BehaviorSubject} from "rxjs";
import {CartModelPublic, CartModel} from "../models/cart.model";
import {HomeModel} from "../models/Home.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {NavigationExtras, Router} from "@angular/router";
import {OrderService} from "./order.service";

import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})


export class CartService {

  ServerURL = environment.serverURL;

  private cartDataClient: CartModelPublic = {prodData: [{incart: 0, Product_Id: 0}], Total_Amount: 0};  // This will be sent to the backend Server as post data
  // Cart Data variable to store the cart information on the server
  private cartDataServer: CartModel = {
    data: [{
      product: undefined,
      numInCart: 0
    }],
    Total_Amount: 0
  };

  cartTotal$ = new BehaviorSubject<Number>(0);
  // Data variable to store the cart information on the client's local storage

  cartDataObs$ = new BehaviorSubject<CartModel>(this.cartDataServer);


  constructor(private productService: HomeService,
              private orderService: OrderService,
              private httpClient: HttpClient,
              private router: Router,
              private toast: ToastrService) {

    this.cartTotal$.next(this.cartDataServer.Total_Amount);
    this.cartDataObs$.next(this.cartDataServer);

    let info: CartModelPublic = JSON.parse(localStorage.getItem('cart'));

    if (info !== null && info !== undefined && info.prodData[0].incart !== 0) {
      // assign the value to our data variable which corresponds to the LocalStorage data format
      this.cartDataClient = info;
      // Loop through each entry and put it in the cartDataServer object
      this.cartDataClient.prodData.forEach(p => {
        this.productService.getSingleProduct(p.Product_Id).subscribe((actualProdInfo: HomeModel) => {
          if (this.cartDataServer.data[0].numInCart === 0) {
            this.cartDataServer.data[0].numInCart = p.incart;
            this.cartDataServer.data[0].product = actualProdInfo;
            this.CalculateTotal();
            this.cartDataClient.Total_Amount = this.cartDataServer.Total_Amount;
            localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
          } else {
            this.cartDataServer.data.push({
              numInCart: p.incart,
              product: actualProdInfo
            });
            this.CalculateTotal();
            this.cartDataClient.Total_Amount = this.cartDataServer.Total_Amount;
            localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
          }
          this.cartDataObs$.next({...this.cartDataServer});
        });
      });
    }
  }

  CalculateSubTotal(index): Number {
    let subTotal = 0;

    let p = this.cartDataServer.data[index];
    // @ts-ignore
    subTotal = p.product.Unit_Price * p.numInCart;

    return subTotal;
  }AddProductWishList(Product_Id: Number){
    
  }

  AddProductToCart(Product_Id: Number, quantity?: number) {

    this.productService.getSingleProduct(Product_Id).subscribe(prod => {
      // If the cart is empty
      if (this.cartDataServer.data[0].product === undefined) {
        this.cartDataServer.data[0].product = prod;
        this.cartDataServer.data[0].numInCart = quantity !== undefined ? quantity : 1;
        this.CalculateTotal();
        this.cartDataClient.prodData[0].incart = this.cartDataServer.data[0].numInCart;
        this.cartDataClient.prodData[0].Product_Id = prod.Product_Id;
        this.cartDataClient.Total_Amount = this.cartDataServer.Total_Amount;
        localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
        this.cartDataObs$.next({...this.cartDataServer});
        
      }  // END of IF
      // Cart is not empty
      else {
        let index = this.cartDataServer.data.findIndex(p => p.product.Product_Id === prod.Product_Id);

        // 1. If chosen product is already in cart array
        if (index !== -1) {

          if (quantity !== undefined && quantity <= prod.Quantity) {
            // @ts-ignore
            this.cartDataServer.data[index].numInCart = this.cartDataServer.data[index].numInCart < prod.quantity ? quantity : prod.quantity;
          } else {
            // @ts-ignore
            this.cartDataServer.data[index].numInCart < prod.quantity ? this.cartDataServer.data[index].numInCart++ : prod.quantity;
          }


          this.cartDataClient.prodData[index].incart = this.cartDataServer.data[index].numInCart;
         
        }
        // 2. If chosen product is not in cart array
        else {
          this.cartDataServer.data.push({
            product: prod,
            numInCart: 1
          });
          this.cartDataClient.prodData.push({
            incart: 1,
            Product_Id: prod.Product_Id
          });
          this.toast.success(`${prod.Product_Name} added to the cart.`, "Product Added", {
            timeOut: 1500,
            progressBar: true,
            progressAnimation: 'increasing',
            positionClass: 'toast-top-right'
          })
        }
        this.CalculateTotal();
        this.cartDataClient.Total_Amount = this.cartDataServer.Total_Amount;
        localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
        this.cartDataObs$.next({...this.cartDataServer});
      }  // END of ELSE


    });
  }

  UpdateCartData(index, increase: Boolean) {
    let data = this.cartDataServer.data[index];
    if (increase) {
      // @ts-ignore
      data.numInCart < data.product.Quantity ? data.numInCart++ : data.product.Quantity;
      this.cartDataClient.prodData[index].incart = data.numInCart;
      this.CalculateTotal();
      this.cartDataClient.Total_Amount = this.cartDataServer.Total_Amount;
      this.cartDataObs$.next({...this.cartDataServer});
      localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
    } else {
      // @ts-ignore
      data.numInCart--;

      // @ts-ignore
      if (data.numInCart < 1) {
        this.DeleteProductFromCart(index);
        this.cartDataObs$.next({...this.cartDataServer});
      } else {
        // @ts-ignore
        this.cartDataObs$.next({...this.cartDataServer});
        this.cartDataClient.prodData[index].incart = data.numInCart;
        this.CalculateTotal();
        this.cartDataClient.Total_Amount = this.cartDataServer.Total_Amount;
        localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
      }

    }

  }

  DeleteProductFromCart(index) {
    /*    console.log(this.cartDataClient.prodData[index].prodId);
        console.log(this.cartDataServer.data[index].product.id);*/

    if (window.confirm('Are you sure you want to delete the item?')) {
      this.cartDataServer.data.splice(index, 1);
      this.cartDataClient.prodData.splice(index, 1);
      this.CalculateTotal();
      this.cartDataClient.Total_Amount = this.cartDataServer.Total_Amount;

      if (this.cartDataClient.Total_Amount === 0) {
        this.cartDataClient = {prodData: [{incart: 0, Product_Id: 0}], Total_Amount: 0};
        localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
      } else {
        localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
      }

      if (this.cartDataServer.Total_Amount === 0) {
        this.cartDataServer = {
          data: [{
            product: undefined,
            numInCart: 0
          }],
          Total_Amount: 0
        };
        this.cartDataObs$.next({...this.cartDataServer});
      } else {
        this.cartDataObs$.next({...this.cartDataServer});
      }
    }
    // If the user doesn't want to delete the product, hits the CANCEL button
    else {
      return;
    }


  }

  CheckoutFromCart(userId: Number) {

    this.httpClient.post(`${this.ServerURL}orders/payment`, null).subscribe((res: { success: Boolean }) => {
      console.clear();

      if (res.success) {


        this.resetServerData();
        this.httpClient.post(`${this.ServerURL}orders/new`, {
          userId: userId,
          products: this.cartDataClient.prodData
        }).subscribe((data: OrderConfirmationResponse) => {

          this.orderService.getSingleOrder(data.Order_Id).then(prods => {
            if (data.success) {
              const navigationExtras: NavigationExtras = {
                state: {
                  message: data.message,
                  products: prods,
                  orderId: data.Order_Id,
                  total: this.cartDataClient.Total_Amount
                }
              };
              this.router.navigate(['/thankyou'], navigationExtras).then(p => {
                this.cartDataClient = {prodData: [{incart: 0, Product_Id: 0}], Total_Amount: 0};
                this.cartTotal$.next(0);
                localStorage.setItem('cart', JSON.stringify(this.cartDataClient));
              });
            }
          });

        })
      } else {
        this.router.navigateByUrl('/checkout').then();
       
      }
    })
  }


  private CalculateTotal() {
    let Total = 0;

    this.cartDataServer.data.forEach(p => {
      const {numInCart} = p;
      const {Unit_Price} = p.product;
      // @ts-ignore
      Total += numInCart * Unit_Price;
    });
    this.cartDataServer.Total_Amount = Total;
    this.cartTotal$.next(this.cartDataServer.Total_Amount);
  }

  private resetServerData() {
    this.cartDataServer = {
      data: [{
        product: undefined,
        numInCart: 0
      }],
      Total_Amount: 0
    };
    this.cartDataObs$.next({...this.cartDataServer});
  }

}

interface OrderConfirmationResponse {
  Order_Id: Number;
  success: Boolean;
  message: String;
  products: [{
    Product_Id: Number,
    numInCart: string
  }]
}
