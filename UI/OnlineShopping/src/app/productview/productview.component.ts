import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productService';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { Product } from '../models/product';

@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
products;
myForm:FormGroup;
showToggle:Boolean;
showModal: Boolean;
product:Product;
id:number;

  constructor(private prodService:ProductService,private fb: FormBuilder) { 
    this.product = new Product();
    this.myForm= this.fb.group({
      ProdId:new FormControl(null,Validators.required),
      PName:new FormControl(null,Validators.required),
      Quan:new FormControl(null,Validators.required),
      Price:new FormControl(null,Validators.required),
      Desc:new FormControl(null,Validators.required),
      Col:new FormControl(null,Validators.required),
      Size:new FormControl(null,Validators.required),
      Pic:new FormControl(null,Validators.required),
      Brand: new FormControl(null,Validators.required),
      Category: new FormControl(null,Validators.required),
      Retailer: new FormControl(null,Validators.required)
    })
    this.showToggle=false;
  }
  public get ProdId(){
    return this.myForm.get('ProdId');
  }
  public get PName(){
    return this.myForm.get('PName');
  }
  public get Quan(){
    return this.myForm.get('Quan');
  }
  public get Price(){
    return this.myForm.get('Price');
  }
  public get Desc(){
    return this.myForm.get('Desc');
  }
  public get Col(){
    return this.myForm.get('Col');
  }
  public get Size(){
    return this.myForm.get('Size');
  }
  public get Pic(){
    return this.myForm.get('Pic');
  }
  public get Brand(){
    return this.myForm.get('Brand');
  }
  public get Category(){
    return this.myForm.get('Category');
  }
  public get Retailer(){
    return this.myForm.get('Retailer');
  }
  get f() {
     return this.myForm.controls;
     }

     initializeFromGroup(){
      this.myForm.setValue({
          ProdId: '',
          PName: '',
          Quan: '',
          Price: '',
          Desc: '',
          Col: '',
          Size: '',
          Pic: '',
          Brand: '',
          Category: '',
          Retailer: ''
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
      this.prodService.postProduct(this.product).subscribe((data)=>
      {
        //console.log(data);
        this.products = data;
      })
      this.hide();
    }
  }
delete()
{
  this.prodService.delProduct(this.id).subscribe((data)=>
  {
    console.log(data);
  })
}
  onClose(){
    this.myForm.reset();
  }

  ngOnInit(): void {
    this.prodService.getProducts().subscribe((data)=>{
      this.products = data;
      //console.log(data);
      })
  }

}
