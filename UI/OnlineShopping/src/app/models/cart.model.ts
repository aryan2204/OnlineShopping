import {HomeModel} from './Home.model';

export interface CartModel {
  Total_Amount: number;
  data: [{
    product: HomeModel
    numInCart: number
  }];
}

export interface CartModelPublic {
  Total_Amount: number;
  prodData: [{
    Product_Id: Number
    incart: number
  }]
}