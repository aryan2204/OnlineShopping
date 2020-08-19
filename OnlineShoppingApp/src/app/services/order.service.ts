import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Orders } from '../models/order.model';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  products: ProductResponseModel[] = [];
  ServerURL = environment.serverURL;

  constructor(private http: HttpClient) {
  }
  public getOrders()
    {
        return this.http.get(this.ServerURL + 'orders');
    }

  getSingleOrder(orderId: Number) {
    return this.http.get<ProductResponseModel[]>(`${this.ServerURL}orders/${orderId}`).toPromise();
  }
}

interface ProductResponseModel {
  Product_Id: Number;
  Product_Name: String;
  Product_Description: String;
  Unit_Price: Number;
  Quantity: Number;
  Pictures: String;
}