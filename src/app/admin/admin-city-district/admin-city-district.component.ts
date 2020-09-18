import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IDistrict } from '../../shared/interfaces/district.interface';
import { DistrictService } from '../../shared/services/district.service';
import { District } from '../../shared/models/district.model';

@Component({
  selector: 'app-admin-city-district',
  templateUrl: './admin-city-district.component.html',
  styleUrls: ['./admin-city-district.component.scss']
})
export class AdminCityDistrictComponent implements OnInit {
  modalRef: BsModalRef;
  adminDistrict: Array<IDistrict> = [];
  districtID = 1;
  nameEN: string;
  nameUA: string;
  delete: IDistrict;
  textAdd: boolean = true;
  order: string = '';
  reverse: boolean = false;
  sortedCollection: Array<IDistrict> = [];
  searchParam: string;
  
  constructor(private modalService: BsModalService,
    private districtService: DistrictService) { }

  ngOnInit(): void {
    this.adminJSONDistrict();
  }

  private adminJSONDistrict(): void {
    this.districtService.getJSONDistrict().subscribe(data => {
      this.adminDistrict = data;
    });
  }
  addDistrict() {
    const newDistrict = new District(this.districtID, this.nameEN, this.nameUA);
    delete newDistrict.id;
    this.districtService.postJSONDistrict(newDistrict).subscribe(() => {
      this.adminJSONDistrict();
    })
    this.resetForm();
    this.modalRef.hide();
  }

  deleteDistrict(district: IDistrict, deleteBtn: TemplateRef<any>): void {
    this.districtService.deleteJSONDistrict(district.id).subscribe(() => {
      this.adminJSONDistrict();
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

  openModalDelete(deleteBtn: TemplateRef<any>, city: IDistrict) {
    this.modalRef = this.modalService.show(deleteBtn);
    this.delete = city;
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
