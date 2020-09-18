import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ICity } from '../../shared/interfaces/city.interface';
import { CityService } from '../../shared/services/city.service';
import { City } from '../../shared/models/city.model';

@Component({
  selector: 'app-admin-city',
  templateUrl: './admin-city.component.html',
  styleUrls: ['./admin-city.component.scss']
})
export class AdminCityComponent implements OnInit {
  modalRef: BsModalRef;
  adminCity: Array<ICity> = [];
  cityID = 1;
  nameEN: string;
  nameUA: string;
  delete: ICity;
  textAdd: boolean = true;
  order: string = '';
  reverse: boolean = false;
  sortedCollection: Array<ICity> = [];
  searchParam: string;

  constructor(private modalService: BsModalService,
              private cityService: CityService) { }

  ngOnInit(): void {
    this.adminJSONCity();
  }

  private adminJSONCity(): void {
    this.cityService.getJSONCity().subscribe(data => {
      this.adminCity = data;
    });
  }

  addCity() {
    const newCity = new City(this.cityID, this.nameEN, this.nameUA);
    delete newCity.id;
    this.cityService.postJSONCity(newCity).subscribe(() => {
      this.adminJSONCity();
    })
    this.resetForm();
    this.modalRef.hide();
  }

  deleteCity(city: ICity, deleteBtn: TemplateRef<any>): void {
    this.cityService.deleteJSONCity(city.id).subscribe(() =>{
      this.adminJSONCity();
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

  openModalDelete(deleteBtn: TemplateRef<any>, city: ICity) {
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
