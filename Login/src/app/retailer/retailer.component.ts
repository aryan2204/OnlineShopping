import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators,FormBuilder, MinLengthValidator} from '@angular/forms'

@Component({
  selector: 'app-retailer',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.css']
})
export class RetailerComponent implements OnInit {
  myForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.myForm= this.fb.group({
      email:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z 0-9 @ .]*')])
    });
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
 submit(){ 
 }

  ngOnInit(): void {
  }

}
