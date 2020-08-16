import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service'

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
  orders;
  constructor(private orderSer:OrderService) { }

  ngOnInit(): void {
    this.orderSer.getOrders().subscribe((data)=>{
      this.orders = data;
    })
  }


}
