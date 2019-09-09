import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdetailsComponent } from './bankdetails.component';

describe('BankdetailsComponent', () => {
  let component: BankdetailsComponent;
  let fixture: ComponentFixture<BankdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
