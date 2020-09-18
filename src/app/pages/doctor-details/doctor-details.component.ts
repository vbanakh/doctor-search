import { Component, OnInit } from '@angular/core';
import { IDoctor } from '../../shared/interfaces/doctor.interfsce';
import { DoctorService } from '../../shared/services/doctor.service';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from '../../shared/models/appointment.model';
import { AppointmentService } from '../../shared/services/appointment.service';


@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {
appointment: IDoctor;
appID = 1;
doctor: IDoctor;
minDate: Date;
maxDate: Date;
dateChoose: Date;
timeChoose: Date;
firstName: string;
lastName:string;
email: string;
phone: string;
complaint: string = '';
showSpinners = false;
allowMouseWheel = true;
isAppointment: boolean = true;

  constructor(private docService: DoctorService,
              private appService: AppointmentService,
              private actRoute: ActivatedRoute) 
              {this.minDate = new Date();
              this.maxDate = new Date();
              this.minDate.setDate(this.minDate.getDate());
              this.maxDate.setDate(this.maxDate.getDate() + 14);
             }

  ngOnInit(): void {
    this.getViewDoctor();
    this.getUserData()
  }

  private getViewDoctor(): void {
    const id = +this.actRoute.snapshot.paramMap.get('id');
    this.docService.getOneDoctor(id).subscribe(data => {
      this.doctor = data;
    });
  }

  addApp():void {
    this.timeChoose = new Date();
    this.timeChoose.setDate(this.timeChoose.getTime());
    console.log(this.timeChoose);
    const app = new Appointment(this.appID, 
                                this.firstName,
                                this.lastName, 
                                this.email, 
                                this.phone,
                                this.complaint, 
                                this.dateChoose, 
                                this.timeChoose, 
                                this.doctor, 
                                new Date());
    delete app.id;
    
    this.appService.addAppointment(app).subscribe(
      () => {
        this.isAppointment = false;
        this.scrollToTop();
        this.resetForm();
      }
    )  
  }

private resetForm():void{
  this.firstName='';
  this.lastName=''
  this.email='';
  this.phone='';
  this.complaint = '';
  this.dateChoose = new Date();
  this.timeChoose = new Date();
}
 
 scrollToTop() {
  window.scrollTo({
    top: 0
  })
}

private getUserData(): void {
  const user = JSON.parse(localStorage.getItem('user'));
  this.email = user.userEmail;
  this.firstName = user.userFirstName;
  this.lastName = user.userLastName;
}
}
