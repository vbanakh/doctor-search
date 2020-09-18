import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../shared/services/doctor.service';
import { ClinicService } from '../../shared/services/clinic.service';
import { IDoctor } from 'src/app/shared/interfaces/doctor.interfsce';
import { IClinic } from '../../shared/interfaces/clinic.interface';

@Component({
  selector: 'app-clinic',
  templateUrl: './clinic.component.html',
  styleUrls: ['./clinic.component.scss']
})
export class ClinicComponent implements OnInit {
  clinic: Array<IClinic>
  doctor: Array<IDoctor>;
  checkFilter: string;
  p: number = 1;
  constructor(private docService: DoctorService,
    private clinicService: ClinicService) { }

  ngOnInit(): void {
    this.getClinic();
  }

  getClinic(): void {
    this.clinicService.getJSONClinic().subscribe(data =>
      this.clinic = data);
  }

  filterClinic(): void {
    if (this.checkFilter === 'all') {
      this.getClinic();
    }
    else {
      this.clinicService.getJSONClinicFilter(this.checkFilter).subscribe(data =>
        this.clinic = data);
    }
  }
}
