import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerViewComponent } from './retailer-view.component';

describe('RetailerViewComponent', () => {
  let component: RetailerViewComponent;
  let fixture: ComponentFixture<RetailerViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
