import { Injectable } from '@angular/core';
import { Wishlist } from '../models/wishlist.model';

@Injectable()
export class WishlistDataService {
  // placeholder of last is do
  // we can simulate automatic incrementing of id's
  lastId: number = 0;

  // Placeholder for wishlist's
  wishlist: Wishlist[] = [];

  constructor() { }

  // Simulate service POST /wishlist
  addWishlist(wishlist: Wishlist): WishlistDataService {
    if (!wishlist.Id) {
      wishlist.Id = ++this.lastId;
    }
    this.wishlist.push(wishlist);
    return this;
  }

  // Simulate DELETE /wishlist/:id
  deleteWishlistById(id: number): WishlistDataService {
    this.wishlist = this.wishlist
      .filter(wishlist => wishlist.Id !== id);
    return this;
  }

  // PUT wishlist/:id
  updateWishlistById(id: number, values: Object = {}): Wishlist {
    // tslint:disable-next-line:prefer-const
    let wish = this.getWishListById(id);
    if (!wish) {
      return null;
    }
    Object.assign(wish, values);
    return wish;
  }

  getAllWishlists(): Wishlist[] {
    return this.wishlist;
  }

  // Simulate GET /wishlist/:id
  getWishListById(id: number): Wishlist {
    return this.wishlist
    .filter(wishlist => wishlist.Id === id)
    .pop();
  }

  // Toggle wishlist complete
  toggleWishlistComplete(wish: Wishlist) {
    const updatedWish = this.updateWishlistById(wish.Id, {
      complete: !wish.complete
    });
    return updatedWish;
  }

}