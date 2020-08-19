import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service'
import {SharedService} from '../services/shared.service';
import {Orders} from '../models/order.model';
 @Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
  order:Orders;
  orders;
  public service;
  Customerid;
  constructor(private orderSer:OrderService,private sharedService:SharedService) { 
    this.service=sharedService;
  }

  ngOnInit(): void {
    this.Customerid=this.service.getCustomerId();
    this.order.Customer_Id=this.Customerid;
    this.orderSer.getOrders().subscribe((data)=>{
      this.orders = data;
    })
  }


}
