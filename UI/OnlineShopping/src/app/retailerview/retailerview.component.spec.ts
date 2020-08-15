import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerviewComponent } from './retailerview.component';

describe('RetailerviewComponent', () => {
  let component: RetailerviewComponent;
  let fixture: ComponentFixture<RetailerviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailerviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
