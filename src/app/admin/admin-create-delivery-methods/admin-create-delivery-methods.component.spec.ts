import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateDeliveryMethodsComponent } from './admin-create-delivery-methods.component';

describe('AdminCreateDeliveryMethodsComponent', () => {
  let component: AdminCreateDeliveryMethodsComponent;
  let fixture: ComponentFixture<AdminCreateDeliveryMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateDeliveryMethodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateDeliveryMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
