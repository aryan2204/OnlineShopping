import { Component } from '@angular/core';
import { Wishlist } from './wishlist/wishlist';
import { WishlistDataService } from './wishlist/wishlist-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [WishlistDataService]
})
export class AppComponent {
  
}
