import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder, MinLengthValidator} from '@angular/forms'
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import {Retailer} from '../models/retailer.model';
import {LoginService} from '../services/login.service';
@Component({
  selector: 'app-retailerlogin',
  templateUrl: './retailerlogin.component.html',
  styleUrls: ['./retailerlogin.component.css']
})
export class RetailerloginComponent implements OnInit {
  myForm:FormGroup;
  retailer:Retailer;
  public service;
  showError;
  result;

  constructor(private fb:FormBuilder,private routes:Router,private sharedService:SharedService,private loginService:LoginService) {
    this.service=sharedService;
    this.retailer=new Retailer();
    this.showError=false;

    this.myForm= this.fb.group({
      email:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z 0-9 @ .]*')])
    });

    this.showError=false;
   }
  public get email(){
    return this.myForm.get('email');
  }
  get f() {
    return this.myForm.controls;
    }

    initializeFromGroup(){
     this.myForm.setValue({
      email: ''         
     });
 }
 retailerlogin(){
   if(this.myForm.valid){
     this.retailer.Retailer_EMail=this.email.value;

     this.loginService.retailerlogin(this.retailer).subscribe((data)=>
     {
         this.result=data;
         console.log(this.result);
         if(this.result!=null)
         {
           this.service.setRetailerId(this.result);
          
           this.routes.navigate(["/retailerdashboard"]);
         }
      })
   
    }
    if(this.result==null)
    {
     this.showError=true;
    }
  }
  ngOnInit(): void {
  }
}
