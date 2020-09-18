import { Component, OnInit, TemplateRef } from '@angular/core';
import { SpecialityService } from '../../shared/services/speciality.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ISpeciality } from '../../shared/interfaces/speciality.interface';
import { Speciality } from '../../shared/models/speciality.model';

@Component({
  selector: 'app-admin-speciality',
  templateUrl: './admin-speciality.component.html',
  styleUrls: ['./admin-speciality.component.scss']
})
export class AdminSpecialityComponent implements OnInit {
 
  adminSpec: Array<ISpeciality> = [];
  specID = 1;
  nameEN: string;
  nameUA: string;

  delete: ISpeciality;
  modalRef: BsModalRef;
  textAdd: boolean = true;
  order: string = '';
  reverse: boolean = false;
  sortedCollection: Array<ISpeciality> = [];
  searchParam: string;


  constructor(private modalService: BsModalService,
              private spService: SpecialityService) { }

   ngOnInit(): void {
    this.adminJSONCSpeciality();
  }

  private adminJSONCSpeciality(): void {
    this.spService.getJSONSpeciality().subscribe(data => {
      this.adminSpec= data;
    });
  }
  addSpeciality() {
    const newSpec = new Speciality (this.specID, this.nameEN.trim(), this.nameUA.trim());
    delete newSpec.id;
    this.spService.postJSONSpeciality(newSpec).subscribe(() => {
      this.adminJSONCSpeciality();
    })
    this.resetForm();
    this.modalRef.hide();
  }

  deleteSpeciality(spec: ISpeciality, deleteBtn: TemplateRef<any>): void {
    this.spService.deleteJSONSpeciality(spec.id).subscribe(() =>{
      this.adminJSONCSpeciality();
    })
    this.modalRef.hide();
  }

  private resetForm(): void {
    this.nameEN = '';
    this.nameUA = '';
  }

  //Open\close modal 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  openModalDelete(deleteBtn: TemplateRef<any>, spec: ISpeciality) {
    this.modalRef = this.modalService.show(deleteBtn);
    this.delete = spec;
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
