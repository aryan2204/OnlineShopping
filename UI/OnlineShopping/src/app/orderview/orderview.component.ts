import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/orderService';

@Component({
  selector: 'app-orderview',
  templateUrl: './orderview.component.html',
  styleUrls: ['./orderview.component.css']
})
export class OrderviewComponent implements OnInit {
orders;
  constructor(private orderSer:OrderService) { }

  ngOnInit(): void {
    this.orderSer.getOrders().subscribe((data)=>{
      this.orders = data;
    })
  }

}
