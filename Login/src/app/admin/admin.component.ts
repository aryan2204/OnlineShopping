import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder, MinLengthValidator} from '@angular/forms'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  myForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.myForm= this.fb.group({
      Uname:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required,Validators.minLength[8])
    });
   }
  public get Uname(){
    return this.myForm.get('Uname');
  }
  public get password(){
    return this.myForm.get('password');
  }
  
  get f() {
    return this.myForm.controls;
    }

    initializeFromGroup(){
     this.myForm.setValue({
      Uname: '',
      password: ''
         
     });
 }
 submit(){
   
}

  ngOnInit(): void {
  }

}
