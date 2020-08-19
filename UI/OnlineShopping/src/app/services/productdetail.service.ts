import { Product } from '../models/product.model'
import { HttpClient,HttpHeaders } from '@angular/common/http';
//import { Observable } from '../../../node_modules/rxjs/Observable';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService
{
    url = "http://localhost:58620/api/ProductDetails";
    constructor(private http: HttpClient)
    {
    }
    public getProducts():Observable<Product[]>
    {
       return this.http.get<Product[]>(this.url);
    }
    public getProdById(prodId:string):Observable<Product>
    {
        return this.http.get<Product>(this.url+"/"+prodId);
    }
    public postProduct(product:Product):Observable<Product>
    {
        let httpHeaders = new HttpHeaders()
        .set('Content-Type','application/json');
        let options = {
          headers:httpHeaders
        };
        return this.http.post<Product>(this.url,product,options);
    }
    public putProduct(prod:Product):Observable<Product>
    {
        let httpHeaders = new HttpHeaders()
        .set('Content-Type','application/json');
        let options = {
          headers:httpHeaders
        };
        return this.http.put<Product>(this.url+"/"+prod.Product_Id,prod,options);
    }
    public delProduct(id:string):Observable<number>
    {
        let httpHeaders = new HttpHeaders()
        .set('Content-Type','application/json');
        return this.http.delete<number>(this.url+"/"+id);
    }
}