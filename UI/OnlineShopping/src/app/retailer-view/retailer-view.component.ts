import { Component, OnInit } from '@angular/core';
import { RetailerService } from '../services/retailor.service';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { Retailer } from '../models/retailer.model';

@Component({
  selector: 'app-retailerview',
  templateUrl: './retailer-view.component.html',
  styleUrls: ['./retailer-view.component.css']
})
export class RetailerviewComponent implements OnInit {
retailers: any = [];
showToggle:Boolean;
showModal: Boolean;
myForm:FormGroup;
retailer:Retailer;
message = null;
datasaved = false;
retailerIdtoUpdate:null;
id:number;

  constructor(private retService:RetailerService,private fb: FormBuilder) { 
    this.retailer = new Retailer();
    this.myForm= this.fb.group({
      RetName:new FormControl('',Validators.required),
      RetEmail:new FormControl('',Validators.required),
      RetNum:new FormControl('',Validators.required)
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
    this.retailer.Retailer_Name=this.RetName.value;
    this.retailer.Retailer_EMail=this.RetEmail.value;
    this.retailer.MobileNum=this.RetNum.value;
    if(this.myForm.valid)
    {
      this.retService.postRetailer(this.retailer).subscribe(()=>
        {
          //console.log(data);
          //this.products = data;
          this.datasaved = true;
          this.message = "Data Inserted";
          this.retService.getRetailer();
          this.retailerIdtoUpdate = null;
          this.myForm.reset();
        });
      this.hide();
    }
  }
  Delete(retId:string)
  {
    this.retService.deleteRetailer(retId).subscribe(()=>
{
  this.message = "Deleted";
  this.retService.getRetailer();
  this.retailerIdtoUpdate = null;
  this.myForm.reset();
})
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