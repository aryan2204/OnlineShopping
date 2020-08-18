import { Component, OnInit } from '@angular/core';
import {HomeModel,serverResponse} from '../models/Home.model';
import {HomeService} from '../services/home.service';
import {Router} from '@angular/router';
import { CartService } from '../services/cart.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products; 
  public service;
  Userid;
  constructor(private homeService:HomeService,private cartService:CartService,private router:Router,private sharedService:SharedService)
   { 
     this.service=sharedService
   }

  ngOnInit(): void {
    this.Userid=this.service.getCustomerId();
    console.log(this.Userid);
    this.homeService.getAllProducts().subscribe((data) => {
     this.products = data; 
      //console.log(data);
    });
  }
  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
}


  AddProduct(id: Number) {
    this.cartService.AddProductToCart(id);
  }
}
