import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/productdetail.service';
import { FormGroup, FormControl, Validators,FormBuilder } from '@angular/forms';
import { Product } from '../models/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  products;
  myForm:FormGroup;
  showToggle:Boolean;
  showModal: Boolean;
  product:Product;
  allProducts:Observable<Product[]>;
  productIdtoUpdate = null; 
  message = null;
  datasaved = false;
  id:number;
  
    constructor(private prodService:ProductService,private fb: FormBuilder) { 
      this.product = new Product();
      this.myForm= this.fb.group({
        ProdId:new FormControl('',Validators.required),
        PName:new FormControl('',Validators.required),
        Quan:new FormControl('',Validators.required),
        Price:new FormControl('',Validators.required),
        Desc:new FormControl('',Validators.required),
        Pic:new FormControl('',Validators.required),
        Col:new FormControl(''),
        Size:new FormControl(''),
        Retailer: new FormControl('',Validators.required),
        Category: new FormControl('',Validators.required),
        Brand: new FormControl('',Validators.required)
      }),
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
    public get Pic(){
      return this.myForm.get('Pic');
    }
    public get Col(){
      return this.myForm.get('Col');
    }
    public get Size(){
      return this.myForm.get('Size');
    }
    public get Retailer(){
      return this.myForm.get('Retailer');
    }
    public get Category(){
      return this.myForm.get('Category');
    }
    public get Brand(){
      return this.myForm.get('Brand');
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
            Pic: '',
            Col: '',
            Size: '',
            Retailer: '',
            Category: '',
            Brand: ''
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
        this.product.Product_Id=this.ProdId.value;
        this.product.Product_Name=this.PName.value;
        this.product.Quantity=this.Quan.value;
        this.product.Unit_Price=this.Price.value;
        this.product.Product_Description=this.Desc.value;
        this.product.Pictures=this.Pic.value;
        this.product.Color=this.Col.value;
        this.product.Size=this.Size.value;
        this.product.Category_Id=this.Category.value;
        this.product.Retailer_Id=this.Retailer.value;
        this.product.BrandName=this.Brand.value;
        if(this.productIdtoUpdate==null)
        {
          this.prodService.postProduct(this.product).subscribe(()=>
          {
            this.datasaved = true;
            this.message = "Data Inserted";
            this.prodService.getProducts();
            this.productIdtoUpdate = null;
            this.myForm.reset();
          });
        } 
        else
        {
          this.product.Product_Id= this.productIdtoUpdate;
          this.prodService.putProduct(this.product).subscribe(()=>
          {
            this.datasaved = true;
            this.message = "Data Updated";
            this.prodService.getProducts();
            this.productIdtoUpdate = null;
            this.myForm.reset();
          });
        }  
        this.hide();
      }
    }
  Edit(prodId:string)
  {
  this.prodService.getProdById(prodId).subscribe(prod=>
    {
      //{{debugger}}
      this.message=null;
      this.datasaved = false;
      this.productIdtoUpdate=prod.Product_Id;
      this.myForm.controls['ProdId'].setValue(prod.Product_Id);
      this.myForm.controls['PName'].setValue(prod.Product_Name);
      this.myForm.controls['Quan'].setValue(prod.Quantity);
      this.myForm.controls['Desc'].setValue(prod.Product_Description);
      this.myForm.controls['Pic'].setValue(prod.Pictures);
      this.myForm.controls['Col'].setValue(prod.Color);
      this.myForm.controls['Size'].setValue(prod.Size);
      this.myForm.controls['Category'].setValue(prod.Category_Id);
      this.myForm.controls['Retailer'].setValue(prod.Retailer_Id);
      this.myForm.controls['Brand'].setValue(prod.BrandName);
    });
    
  }
  Delete(prodId:string)
  {
  this.prodService.delProduct(prodId).subscribe(()=>
  {
    this.message = "Deleted";
    this.prodService.getProducts();
    this.productIdtoUpdate = null;
    this.myForm.reset();
  })
  }
    onClose(){
      this.myForm.reset();
      this.message = null; 
      this.datasaved= null;
    }
  
    ngOnInit(): void {
      this.prodService.getProducts().subscribe((data)=>{
        this.products = data;
        //console.log(data); 
        })
    }

}