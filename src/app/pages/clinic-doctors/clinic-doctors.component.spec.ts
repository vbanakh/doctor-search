import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicDoctorsComponent } from './clinic-doctors.component';

describe('ClinicDoctorsComponent', () => {
  let component: ClinicDoctorsComponent;
  let fixture: ComponentFixture<ClinicDoctorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicDoctorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
