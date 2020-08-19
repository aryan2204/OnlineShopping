import {RetProduct } from '../models/retailerproduct.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RetailerdashboardService
{
    url = "http://localhost:58620/api/ProductDetails";
    constructor(private http: HttpClient)
    {
    }
    public getProducts():Observable<RetProduct[]>
    {
       return this.http.get<RetProduct[]>(this.url);
    }
    public AddProduct(product:RetProduct):Observable<RetProduct>
    {
        let httpHeaders = new HttpHeaders()
        .set('Content-Type','application/json');
        let options = {
          headers:httpHeaders
        };
        return this.http.post<RetProduct>(this.url,product,options);
    }
    public delProduct(id:string):Observable<number>
  {
      let httpHeaders = new HttpHeaders()
      .set('Content-Type','application/json');
      return this.http.delete<number>(this.url+"/"+id);
  }
}