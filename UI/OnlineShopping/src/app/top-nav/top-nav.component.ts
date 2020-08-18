import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Registration } from '../models/customer.model';
import {RegistrationService} from '../services/registration.service';
import { AuthenticationService } from '../services/authentication.service';
import { SharedService } from '../services/shared.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
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

  @Input()
    public alerts: Array<IAlert> = [];

  message = "";
  public globalResponse: any;
  constructor(private sharedService:SharedService, private modalService: NgbModal,private fb: FormBuilder,private regService:RegistrationService ,private authService:AuthenticationService) {

  }
  ngOnInit()
  {
    this.registrationForm = this.fb.group({
      Customer_FirstName:  ['', Validators.compose([Validators.required, Validators.minLength(5),Validators.maxLength(20)])],
      Customer_LastName:  ['', Validators.compose([Validators.required, Validators.minLength(5),Validators.maxLength(20)])],
      Password:['',Validators.compose([Validators.required, Validators.minLength(8),Validators.maxLength(20)])],
      Customer_EMail:['',Validators.compose([Validators.required,Validators.email])],
      Role:['',Validators.required],
      Customer_Mobile_Number:['',Validators.required],
      Customer_Address:[''],
    });
    this.loginForm = this.fb.group({
      Customer_EMail:  ['', [Validators.required]],
      Password:['',[Validators.required]],
    });
  }
  open(content) {
    this.alerts=[];
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  GetClaims()
  {
        this.authService.getClaims()
            .subscribe((result) => {
              this.globalResponse = result;              
            },
            error => { //This is error part
              console.log(error.message);
            },
            () => {
                //  This is Success part
               // console.log(this.globalResponse );
                let a=this.globalResponse;
                this.currentUser=this.globalResponse;
                this.authService.storeRole(this.currentUser);
                }
              )
            
  } 
  Login()
  {
    let user=this.loginForm.value;
    this.isLoggedIn=false;
    this.authService.removeToken();
    this.alerts=[];
    //console.log(user);
        this.authService.ValidateCustomer (user)
            .subscribe((result) => {
              this.globalResponse = result;              
            },
            error => { 
              console.log(error.message);
              this.alerts.push({
                id: 2,
                type: 'danger',
                message: 'Either Email or password is incorrect.'
              });
            },
            () =>{
               // console.log(this.globalResponse);
                this.authService.storeToken(this.globalResponse.access_token);  
                this.alerts.push({
                  id: 1,
                  type: 'success',
                  message: 'Login successful. Now you can close and proceed further.',
                });
                this.isLoggedIn=true;
                this.GetClaims();
                
                }
              )
  }
  LogOut()
  {
    this.isLoggedIn=false;
    this.authService.removeToken();
  }

  OnRegister()
  {
    this.registrationInputs=this.registrationForm.value;
    console.log(this.registrationInputs);
      this.regService.RegisterCustomer(this.registrationInputs)
          .subscribe((result) => {
            this.globalResponse = result;              
          },
          error => { //This is error part
            this.alerts.push({
              id: 2,
              type: 'danger',
              message: 'Registration failed with fallowing error:'+error,
            });
          },
          () => {
              //  This is Success part
              this.alerts.push({
                id: 1,
                type: 'success',
                message: 'Registration successful.',
              });
              
              }
            )
          }
     public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  } 
}
export interface IAlert {
  id: number;
  type: string;
  message: string;
}