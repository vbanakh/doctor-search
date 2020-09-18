import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/shared/services/appointment.service';
import { ActivatedRoute } from '@angular/router';
import { IAppointment } from '../../../shared/interfaces/ appointment.interface';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  appointment: Array<IAppointment>= [];
  email: string;
  constructor( private appService: AppointmentService,
    private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUserAppointment()
  }

  getUserAppointment():void{
    const user = JSON.parse(localStorage.getItem('user'));
    this.email = user.userEmail;
    this.appService.getAppUser(this.email).subscribe(data => {
      this.appointment = data;
    })

  }
}
