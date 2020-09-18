import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IClinic } from '../../shared/interfaces/clinic.interface';
import { ClinicService } from '../../shared/services/clinic.service';
import { Clinic } from '../../shared/models/clinic.model';

@Component({
  selector: 'app-admin-clinic',
  templateUrl: './admin-clinic.component.html',
  styleUrls: ['./admin-clinic.component.scss']
})
export class AdminClinicComponent implements OnInit {
  
  clinicID = 1;
  nameEN: string;
  nameUA: string;
  address: string;
  ownership: string;
  adminClinic: Array<IClinic> = [];
 
  delete: IClinic;
  textAdd: boolean = true;
  modalRef: BsModalRef;
  order: string = '';
  reverse: boolean = false;
  sortedCollection: Array<IClinic> = [];
  searchParam: string;
  constructor(private modalService: BsModalService,
              private clinicService: ClinicService) { }

  ngOnInit(): void {
    this.adminJSONClinic();
  }

  private adminJSONClinic(): void {
    this.clinicService.getJSONClinic().subscribe(data => {
      this.adminClinic = data;
    });
  }

  addClinic() {
    const newClinic = new Clinic( this.clinicID, 
                                  this.nameEN.trim(), 
                                  this.nameUA.trim(), 
                                  this.address.trim(), 
                                  this.ownership);
    delete newClinic.id;
    console.log(newClinic);
    this.clinicService.postJSONClinic(newClinic).subscribe(() =>{
      this.adminJSONClinic();
    })
    this.resetForm();
    this.modalRef.hide();
  }

  deleteClinic(clinic: IClinic, deleteBtn: TemplateRef<any>): void {
    this.clinicService.deleteJSONClinic(clinic.id).subscribe(() =>{
      this.adminJSONClinic();
    })
    this.modalRef.hide();
  }

  private resetForm(): void {
    this.nameEN = '';
    this.nameUA = '';
    this.address = '';
    this.ownership = '';
  }

  //Open\close modal 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'gray modal-lg' });
  }

  openModalDelete(deleteBtn: TemplateRef<any>, clinic: IClinic) {
    this.modalRef = this.modalService.show(deleteBtn);
    this.delete = clinic;
  }

  closeModal(template: TemplateRef<any>) {
    this.modalRef.hide();
    this.resetForm();
  }

  closeModalDelete(deleteBtn: TemplateRef<any>) {
    this.modalRef.hide();
  }

  //Order pipe
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }

}
