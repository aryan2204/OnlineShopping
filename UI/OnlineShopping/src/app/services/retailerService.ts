import { Retailer } from '../models/retailer';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RetailerService
{
    constructor(private http: HttpClient)
    {
    }
    public getRetailer()
    {
        return this.http.get("http://localhost:59289/api/Retailers");
    }
    public postRetailer(retailer:Retailer)
    {
        return this.http.post("http://localhost:59289/api/Retailers",retailer);
    }
}