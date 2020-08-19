import {Wishlist} from './wishlist';

describe('Wishlist', () => {
  it('should create an instance', () => {
    expect(new Wishlist()).toBeTruthy();
  });

it('should accept values in the constructor', () => {
  const wishlist = new Wishlist({
    title: 'Wishlist',
    complete: true
  });

  expect(wishlist.title).toEqual('Wishlist');
  expect(wishlist.complete).toEqual(true);
});
});
