import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadtopComponent } from './headtop.component';

describe('HeadtopComponent', () => {
  let component: HeadtopComponent;
  let fixture: ComponentFixture<HeadtopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadtopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadtopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
