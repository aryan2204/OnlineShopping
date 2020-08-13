import {HomeModel} from './Home.model';

export interface CartModel {
  total: Number;
  data: [{
    product: HomeModel,
    numInCart: Number
  }];
}

export interface CartModelPublic {
  total: Number;
  prodData: [{
    id: Number,
    incart: Number
  }]
}