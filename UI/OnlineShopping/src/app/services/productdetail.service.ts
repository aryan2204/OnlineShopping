import { Product } from '../models/product.model'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService
{
    constructor(private http: HttpClient)
    {
    }
    public getProducts()
    {
        return this.http.get("http://localhost:63788/api/ProductDetails");
    }
    public postProduct(product:Product)
    {
        return this.http.post("http://localhost:63788/api/ProductDetails",product);
    }
    public putProduct(id:number, prod:Product)
    {
        return this.http.put("http://localhost:63788/api/ProductDetails"+id,prod);
    }
    public delProduct(id:number)
    {
        return this.http.delete("http://localhost:63788/api/ProductDetails"+id);
    }
}