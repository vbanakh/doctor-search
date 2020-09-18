import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCityDistrictComponent } from './admin-city-district.component';

describe('AdminCityDistrictComponent', () => {
  let component: AdminCityDistrictComponent;
  let fixture: ComponentFixture<AdminCityDistrictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCityDistrictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCityDistrictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
