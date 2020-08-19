import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { Wishlist } from './wishlist/wishlist';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
    });
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have a newWish wish`, async(() => {
  // tslint:disable-next-line:prefer-const
  let fixture = TestBed.createComponent(AppComponent);
  // tslint:disable-next-line:prefer-const
  let app = fixture.debugElement.componentInstance;
  expect(app.newWish instanceof Wishlist).toBeTruthy();
  }));

});
