import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Registration } from '../models/customer.model';
import {RegistrationService} from '../services/registration.service';
import { AuthenticationService } from '../services/authentication.service';
import { SharedService } from '../services/shared.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  title = 'OnlineShopping';
  closeResult: string;
  loginForm:FormGroup;
  registrationForm: FormGroup;
  registrationInputs: Registration[];
  isLoggedIn:boolean=false;
  currentUser: Registration[];
 
  public service;
  CustomerId;
  result;
  showLogin;
  showProfile;

  constructor(private routes:Router,private sharedService:SharedService, private modalService: NgbModal,private fb: FormBuilder,private regService:RegistrationService ,private authService:AuthenticationService) 
  {
    this.service=sharedService;
    this.showProfile=false;
  }
  ngOnInit()
  {
   
  }

  myProfile(){

    if(this.CustomerId==null)
    {
         this.routes.navigate(["/userlogin"]);
    }
  }
  LogOut()
  {
    this.isLoggedIn=false;
    this.authService.removeToken();
  }

}
