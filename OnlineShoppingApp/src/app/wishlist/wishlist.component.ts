import { Component, OnInit } from '@angular/core';
import { Wishlist } from '../models/wishlist.model';
import { WishlistDataService } from '../services/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlistData : Wishlist;
  newWish: Wishlist = new Wishlist();
  constructor(private wishListService: WishlistDataService) {

    }

  addWish() {
    this.wishListService.addWishlist(this.newWish);
    this.newWish = new Wishlist();
  }

  toggleWishComplete(wishList) {
    this.wishListService.toggleWishlistComplete(wishList);
  }

  removeWish(wishlist) {
    this.wishListService.deleteWishlistById(wishlist.id);
  }

  get wishes(){
    return this.wishListService.getAllWishlists();
  }

  ngOnInit(): void {
  }

}