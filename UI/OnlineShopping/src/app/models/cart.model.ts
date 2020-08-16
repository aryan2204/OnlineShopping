import {HomeModel} from './Home.model';

export interface CartModel {
  Total_Amount: Number;
  data: [{
    product: HomeModel
    numInCart: Number
  }];
}

export interface CartModelPublic {
  Total_Amount: Number;
  prodData: [{
    Product_Id: Number
    incart: Number
  }]
}