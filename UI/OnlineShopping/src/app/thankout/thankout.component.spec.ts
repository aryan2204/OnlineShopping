import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankoutComponent } from './thankout.component';

describe('ThankoutComponent', () => {
  let component: ThankoutComponent;
  let fixture: ComponentFixture<ThankoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
