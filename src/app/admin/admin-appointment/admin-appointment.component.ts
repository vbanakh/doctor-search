import { Component, OnInit, TemplateRef } from '@angular/core';
import { IAppointment } from '../../shared/interfaces/ appointment.interface';
import { AppointmentService } from '../../shared/services/appointment.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Appointment } from '../../shared/models/appointment.model';

@Component({
  selector: 'app-admin-appointment',
  templateUrl: './admin-appointment.component.html',
  styleUrls: ['./admin-appointment.component.scss']
})
export class AdminAppointmentComponent implements OnInit {
  adminAppointment: Array<IAppointment> = [];
  appStatus :string;
  modalRef: BsModalRef;
  app: IAppointment;
  countCol = 4;
  userComplaint: string ='';
  constructor(private appService: AppointmentService,
              private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getApp();
  }
  getApp():void{
    this.appService.getAppointment().subscribe(
      data => {
        this.adminAppointment = data;
      }
    )
  }

  openDetailsModal(template: TemplateRef<any>, appointment: IAppointment): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    this.app = appointment;
    console.log(this.app)
  }
  updateStatus(){
    const appUpdate = new Appointment(this.app.id,
      this.app.firstName,
      this.app.lastName,
      this.app.email,
      this.app.phone,
      this.userComplaint,
      this.app.dateUser,
      this.app.timeUser,
      this.app.doctorApp,
      this.app.dateApp,
      this.appStatus);
      this.appService.updateAppointment(appUpdate).subscribe(()=>{
      this.getApp();
    });
  }

  confirmApp(): void{
    this.updateStatus();
    this.appStatus = '';
    this.modalRef.hide();
  }
}
