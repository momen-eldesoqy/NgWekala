import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateStoreComponent } from './admin-create-store.component';

describe('AdminCreateStoreComponent', () => {
  let component: AdminCreateStoreComponent;
  let fixture: ComponentFixture<AdminCreateStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateStoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
