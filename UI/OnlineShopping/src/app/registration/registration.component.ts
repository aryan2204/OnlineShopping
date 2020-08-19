import { Component, OnInit } from '@angular/core';
import {Registration} from '../models/customer.model';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {RegistrationService} from '../services/registration.service'
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { combineLatest } from 'rxjs'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  register:Registration;
  registrationForm: FormGroup;
  showDetails:boolean;
  result;
  dateformat;
  nomatch:boolean;
  userId;
  public service;
  constructor(private routes:Router, public sharedService:SharedService,
    private registerationService:RegistrationService) {
      this.register=new Registration();
      this.registrationForm=new FormGroup({
          FirstName:new FormControl(null,[Validators.required,Validators.min(4)]),
          LastName:new FormControl(null,[Validators.required]),
          Email:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z 0-9 @ .]*')]),
          MobileNumber:new FormControl(null,[Validators.required,Validators.minLength(10)]),
          Address:new FormControl(null,[Validators.required]),
          Password:new FormControl(null,[Validators.required,Validators.minLength(7)]),
          confirmpassword:new FormControl(null,[Validators.required,Validators.minLength(7)])

            });
            this.showDetails=false;
            this.nomatch=false;
            this.service = sharedService;
     }

  public get FirstName(){
      return this.registrationForm.get('FirstName');
    }
  public get LastName(){
     return this.registrationForm.get('LastName');
   }
  public get Email(){
     return this.registrationForm.get('Email');
   }
   public get MobileNumber(){
    return this.registrationForm.get('MobileNumber');
   }
  public get Address(){
     return this.registrationForm.get('Address');
   }
  public get Password(){
     return this.registrationForm.get('Password');
   }
  public get confirmpassword(){
     return this.registrationForm.get('confirmpassword');
   }

   registeruser()
   {
       console.log("In register");

     if(this.Password.value==this.confirmpassword.value)
     {
       if(this.registrationForm.valid)
       {
        
        this.showDetails=true;
        this.register.Customer_FirstName=this.FirstName.value;
        this.register.Customer_LastName=this.LastName.value;
        this.register.Customer_EMail=this.Email.value;
        this.register.Customer_Mobile_Number=this.MobileNumber.value;
        this.register.Customer_Address=this.Address.value;
        this.register.Password=this.Password.value;
        this.registerationService.RegisterCustomer(this.register).subscribe((data)=>
       {
           this.result=data;

           if(this.result!=null)
           {
             console.log(this.result);
             console.log("After Get User ")
             this.service.setuserData(this.result);
             
             this.routes.navigate(["userlogin"]);
           }

           if(this.result==null)
           {
             this.nomatch=true;             
           }


       })
}
}
else {
this.nomatch=true;
}
}
ngOnInit(): void {

 this.nomatch=false;
 
} 

}
