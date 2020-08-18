import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  userId;
  public service;
    constructor(private routes:Router,private sharedService:SharedService) 
    {
      this.service=sharedService;
     }
  
  
  
    donePayment()
    {
      this.routes.navigate(["/success"]);
    }
    ngOnInit(): void {
      this.userId=this.service.getuserId();
      if(this.userId==null)
      {
           this.routes.navigate(["/userlogin"]);
      }
  
      
    }

}
