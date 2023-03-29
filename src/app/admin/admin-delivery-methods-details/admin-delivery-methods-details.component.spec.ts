import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeliveryMethodsDetailsComponent } from './admin-delivery-methods-details.component';

describe('AdminDeliveryMethodsDetailsComponent', () => {
  let component: AdminDeliveryMethodsDetailsComponent;
  let fixture: ComponentFixture<AdminDeliveryMethodsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeliveryMethodsDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDeliveryMethodsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
