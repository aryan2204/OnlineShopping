  import { Retailer } from '../models/retailer.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class RetailerService
{
    retalier:Retailer[];
    constructor(private http: HttpClient)
    {
        this.retalier=[];
    }
    public getRetailer()
    {
        return this.http.get("http://localhost:63788/api/Retailers");
    }
    public postRetailer(retailer:Retailer)
    {
        return this.http.post("http://localhost:59289/api/Retailers",retailer);
    }
}