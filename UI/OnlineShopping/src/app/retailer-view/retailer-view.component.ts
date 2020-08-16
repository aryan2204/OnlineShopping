import { Component, OnInit } from '@angular/core';
import { RetailerService } from '../services/retailor.service';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { Retailer } from '../models/retailer.model';

@Component({
  selector: 'app-retailer-view',
  templateUrl: './retailer-view.component.html',
  styleUrls: ['./retailer-view.component.css']
})
export class RetailerViewComponent implements OnInit {
  retailers:any = [];
showToggle:Boolean;
showModal: Boolean;
myForm:FormGroup;
retailer:Retailer;  

  constructor(private retService:RetailerService,private fb: FormBuilder) { 
    this.retailer = new Retailer();
    this.myForm= this.fb.group({
      RetName:new FormControl(null,Validators.required),
      RetEmail:new FormControl(null,Validators.required),
      RetNum:new FormControl(null,Validators.required)
    })
    this.showToggle=false;
  }

  public get RetName(){
    return this.myForm.get('RetName');
  }
  public get RetEmail(){
    return this.myForm.get('RetEmail');
  }
  public get RetNum(){
    return this.myForm.get('RetNum');
  }
  initializeFromGroup(){
    this.myForm.setValue({
        RetName: '',
        RetEmail: '',
        RetNum: ''
    });
}
show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  hide()
  {
    this.myForm.reset();
    this.initializeFromGroup();
    this.showModal = false;
  }
  onSubmit() 
  {
    if(this.myForm.valid)
    {
      this.retService.postRetailer(this.retailer).subscribe((data)=>
      {
        this.retailers = data;
        console.log(data);
      })
      this.hide();
    }
  }
  onClose(){
    this.myForm.reset();
  }
  ngOnInit(): void {
    this.retService.getRetailer().subscribe((data)=>{
      this.retailers = data;
    })
  }

}
