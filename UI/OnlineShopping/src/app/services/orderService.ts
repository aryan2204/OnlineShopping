import {Orders } from '../models/orders';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService
{
    constructor(private http: HttpClient)
    {
    }
    public getOrders()
    {
        return this.http.get("http://localhost:54875/api/Orders");
    }
}