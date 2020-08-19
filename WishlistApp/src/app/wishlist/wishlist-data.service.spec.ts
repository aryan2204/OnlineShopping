import { TestBed, inject } from '@angular/core/testing';

import { WishlistDataService } from './wishlist-data.service';

import { Wishlist } from './wishlist';

describe('WishlistDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WishlistDataService]
    });
  });

  it('should be created', inject([WishlistDataService], (service: WishlistDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllWishlists()', () => {

    it('should return an empty array by default',
  inject([WishlistDataService], (service: WishlistDataService) => {
    expect(service.getAllWishlists()).toEqual([]);
  }));
  it('should return all wishlists', inject([WishlistDataService], (service: WishlistDataService) => {
    const wish1 = new Wishlist({title: 'Bharat wants love', complete: true});
    const wish2 = new Wishlist({title: 'Food prepared?', complete: false});
    service.addWishlist(wish1);
    service.addWishlist(wish2);
    expect(service.getAllWishlists()).toEqual([wish1, wish2]);
  }));
  });

  describe('#save(wishlist)', () => {

    it('should automatically assign incrementing id',
  inject([WishlistDataService], (service: WishlistDataService) => {
    const wish1 = new Wishlist({title: 'added 1', complete: false});
    const wish2 = new Wishlist({title: 'added 2', complete: true});

    service.addWishlist(wish1);
    service.addWishlist(wish2);
    expect(service.getWishListById(1)).toEqual(wish1);
    expect(service.getWishListById(2)).toEqual(wish2);
  }));
  });
describe('#deleteWihlishById(id)', () => {

 it('should not remove anything if wish with the corresponding id is not found',
inject([WishlistDataService], (service: WishlistDataService) => {
  const wish1 = new Wishlist({title: 'Hi', complete: false});
  const wish2 = new Wishlist({title: 'bye', complete: true});
  service.addWishlist(wish1);
  service.addWishlist(wish2);
  expect(service.getAllWishlists()).toEqual([wish1, wish2]);
  service.deleteWishlistById(3);
  expect(service.getAllWishlists()).toEqual([wish1, wish2]);
}));
});

describe('#updateWishlistById(id ,values)', () => {

  it('should return todo with the corresponding id and updated data',
inject([WishlistDataService], (service: WishlistDataService) => {
  const wish1 = new Wishlist({title: 'Hi', complete: false});
  const wish2 = new Wishlist({title: 'bye', complete: true});
  service.addWishlist(wish1);
  service.addWishlist(wish2);
  const updated = service.updateWishlistById(1, {
    title: 'Hi - Update'
  });
  expect(updated.title).toEqual('Hi - Update');
}));

 it('should return null if todo is not found',
inject([WishlistDataService], (service: WishlistDataService) => {
  const wish1 = new Wishlist({title: 'Hi', complete: false});
  service.addWishlist(wish1);
  const updated = service.updateWishlistById(3, {
    title: 'Bye - Update'
  });
  expect(updated).toEqual(null);
}));
});
});
