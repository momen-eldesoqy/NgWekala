import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeliveryMethodsComponent } from './admin-delivery-methods.component';

describe('AdminDeliveryMethodsComponent', () => {
  let component: AdminDeliveryMethodsComponent;
  let fixture: ComponentFixture<AdminDeliveryMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeliveryMethodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDeliveryMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
