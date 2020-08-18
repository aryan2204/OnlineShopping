import {HomeModel} from './Home.model';

export class Wishlist {
    Id: number;
    
    data: [{
        product: HomeModel
        Quantity: number;
      }];
    complete: boolean = false;

    constructor(values: object= {}) {
        Object.assign(this, values);
    }
}