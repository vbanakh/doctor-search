import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/shared/services/doctor.service';
import { ActivatedRoute } from '@angular/router';
import { IDoctor } from '../../shared/interfaces/doctor.interfsce';

@Component({
  selector: 'app-clinic-doctors',
  templateUrl: './clinic-doctors.component.html',
  styleUrls: ['./clinic-doctors.component.scss']
})
export class ClinicDoctorsComponent implements OnInit {
  doctor: Array<IDoctor>;
  constructor(private docService: DoctorService,
    private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getViewClinic();
  }

  private getViewClinic(): void {
    const id = +this.actRoute.snapshot.paramMap.get('id');
    this.docService.getClinicDoctor(id).subscribe(data => {
      this.doctor = data;
    });
  }
}
