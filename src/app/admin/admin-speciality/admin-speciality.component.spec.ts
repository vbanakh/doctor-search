import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSpecialityComponent } from './admin-speciality.component';

describe('AdminSpecialityComponent', () => {
  let component: AdminSpecialityComponent;
  let fixture: ComponentFixture<AdminSpecialityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSpecialityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSpecialityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
