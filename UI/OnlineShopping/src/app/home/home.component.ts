import { Component, OnInit } from '@angular/core';
import {HomeModel,serverResponse} from '../models/Home.model';
import {HomeService} from '../services/homeService';
import {Router} from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products; 
  constructor(private homeService:HomeService,private router:Router) { }

  ngOnInit(): void {
    this.homeService.getAllProducts().subscribe((data) => {
     this.products = data; 
      console.log(data);
    });
  }
  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
}
 


  AddProduct(id: Number) {
    console.log("added");
    //this.cartService.AddProductToCart(id);
  }
}
