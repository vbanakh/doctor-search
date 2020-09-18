import { Component, OnInit, TemplateRef } from '@angular/core';
import { ICity } from '../../shared/interfaces/city.interface';
import { ISpeciality } from '../../shared/interfaces/speciality.interface';
import { IDoctor } from '../../shared/interfaces/doctor.interfsce';
import { IDistrict } from 'src/app/shared/interfaces/district.interface';
import { IClinic } from '../../shared/interfaces/clinic.interface';
import { Observable } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { DoctorService } from '../../shared/services/doctor.service';
import { ClinicService } from '../../shared/services/clinic.service';
import { CityService } from 'src/app/shared/services/city.service';
import { OrderPipe } from 'ngx-order-pipe';
import { DistrictService } from '../../shared/services/district.service';
import { SpecialityService } from '../../shared/services/speciality.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Doctor } from '../../shared/models/doctor.model';

@Component({
  selector: 'app-admin-doctors',
  templateUrl: './admin-doctors.component.html',
  styleUrls: ['./admin-doctors.component.scss']
})
export class AdminDoctorsComponent implements OnInit {
  searchDoc: string;
  adminDoctors: Array<IDoctor> = [];
  docID = 1;
  docNameEN: string;
  docLastNameEN: string;
  docNameUA: string;
  doclastNameUA: string;

  specialities: Array<ISpeciality> = [];
  speciality: ISpeciality = { id: 1, nameEN: 'therapist', nameUA: 'терапевт' };
  specialityName: string;
  cities: Array<ICity> = [];
  city: ICity;
  cityName: string;
  districts: Array<IDistrict> = [];
  district: IDistrict;
  districtName: string;
  clinics: Array<IClinic> = [];
  clinic: IClinic;
  clinicName: string;
  office: string;
  phone: number;
  docImage: string;

  docNameENEd: string;
  docNameUAEd: string;
  docLastNameENEd:string;
  doclastNameUAEd:string;
  specialityNameEd: string;
  cityNameEd: string;
  districtNameEd: string;
  clinicNameEd: string;
  officeEd: string;
  phoneEd: number;
  editDocImage: string;
  isEdit = false;
  docEdit: IDoctor;
  docDEL: IDoctor;
  imageStatus: boolean= false;
  uploadProgress: Observable<number>;
  modalRef: BsModalRef;
  textAdd: boolean = true;
  order: string = '';
  reverse: boolean = false;
  sortedCollection: Array<IDoctor> = [];

  constructor(private cityService: CityService,
              private clinicService: ClinicService,
              private disService: DistrictService,
              private specService: SpecialityService,
              private docService: DoctorService,
              private afStorage: AngularFireStorage,
              private modalService: BsModalService,
              private orderPipe: OrderPipe) {
    this.sortedCollection = orderPipe.transform(this.adminDoctors, this.order);
  }

  ngOnInit(): void {
    this.adminJSONSpecialities();
    this.adminJSONCities();
    this.adminJSONDistricts();
    this.adminJSONClinics();
    this.getDoctors();
  }
  //extract data from db.json
  private adminJSONSpecialities(): void {
    this.specService.getJSONSpeciality().subscribe(data => {
      this.specialities = data;
    });
  }

  private adminJSONCities(): void {
    this.cityService.getJSONCity().subscribe(data => {
      this.cities = data;
    });
  }

  private adminJSONDistricts(): void {
    this.disService.getJSONDistrict().subscribe(data => {
      this.districts = data;
    });
  }
  private adminJSONClinics(): void {
    this.clinicService.getJSONClinic().subscribe(data => {
      this.clinics = data;
    });
  }

  private getDoctors(): void {
    this.docService.getJSONDoctor().subscribe(data => {
      this.adminDoctors = data;
    });
  }

  // extract data from the form fields and assign in the variable
  setSpeciality(): void {
    this.speciality = this.specialities.filter(spec => spec.nameEN === this.specialityName)[0];
  }
  setSpecialityEd(): void{
    this.speciality =this.specialities.filter(spec => spec.nameEN === this.specialityNameEd)[0];
  }
  setCity(): void {
    this.city = this.cities.filter(city => city.nameEN === this.cityName)[0];
  }
  setCityEd(): void {
    this.city = this.cities.filter(city => city.nameEN === this.cityNameEd)[0];
  }
  setDistrict(): void {
    this.district = this.districts.filter(dis => dis.nameEN === this.districtName)[0];
  }
  setDistrictEd(): void {
    this.district = this.districts.filter(dis => dis.nameEN === this.districtNameEd)[0];
  }
  setClinic(): void {
    this.clinic = this.clinics.filter(clinic => clinic.nameEN === this.clinicName)[0];
    console.log(this.clinic)
  }
  setClinicEd(): void {
    this.clinic = this.clinics.filter(clinic => clinic.nameEN === this.clinicNameEd)[0];
  }


  //Create new doctorProfile 
  openModalDoctor(doctorModal: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(doctorModal, { class: 'gray modal-lg' });
  }
  closeAddModal(): void {
    this.resetForm();
    this.modalRef.hide();
  }

// Create new doctor 
  addDoctor(): void {
    const newDoc = new Doctor(this.docID,
      this.docNameEN.trim(),
      this.docLastNameEN.trim(),
      this.docNameUA.trim(),
      this.doclastNameUA.trim(),
      this.speciality,
      this.clinic,
      this.city,
      this.district,
      this.office.trim(),
      this.phone,
      this.docImage);
    delete newDoc.id;
    console.log(newDoc);
    this.docService.postJSONDoctor(newDoc).subscribe(() => {
      this.getDoctors();
    })
    this.resetForm();
    this.modalRef.hide();
  }

// upload doctor photo to firebase
  uploadFile(event): void {
    const file = event.target.files[0];
    const type = file.type.slice(file.type.indexOf('/') + 1);
    const name = file.name.slice(0, file.name.lastIndexOf('.')).toLowerCase();
    const filePath = `images/${name}.${type}`;
    const upload = this.afStorage.upload(filePath, file);
    this.uploadProgress = upload.percentageChanges();
    upload.then(image => {
      this.afStorage.ref(`images/${image.metadata.name}`).getDownloadURL().subscribe(url => {
        this.docImage = url;
        this.imageStatus = true;
      });
    });
  }

   // Delete image 
   deleteImage(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
  }
  confirmImage(): void {
    this.afStorage.storage.refFromURL(this.docImage).delete();
    this.modalRef.hide();
    this.imageStatus = false;
  }
  declineImage(): void {
    this.modalRef.hide();
  }

  // order pipe
  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
// Reset forms
  private resetForm(): void {
    this.specialityName = this.specialities[0].nameEN;
    this.cityName = this.cities[0].nameEN;
    this.districtName = this.districts[0].nameEN;
    this.clinicName = this.clinics[0].nameEN;
    this.docNameEN = '';
    this.docNameUA = '';
    this.docLastNameEN = '';
    this.doclastNameUA = '';
    this.office = '';
    this.phone = null;
    this.docImage = '';
    this.imageStatus = false;
  }
  private editResetForm():void{
    this.specialityNameEd = this.specialities[0].nameEN; 
    this.cityNameEd = this.cities[0].nameEN;
    this.districtNameEd = this.districts[0].nameEN;
    this.clinicNameEd = this.clinics[0].nameEN;
    this.docNameENEd = '';
    this.docNameUAEd = '';
    this.officeEd = '';
    this.phoneEd = null;
    this.editDocImage = '';
    this.isEdit = false;
  }
// 


  // Delete doctor
  openDeleteModal(deleteModal: TemplateRef<any>, doc: IDoctor): void{
    this.modalRef = this.modalService.show(deleteModal);
    this.docDEL = doc;
  }

  dismissModal(): void{
    this.modalRef.hide();
  }

  deleteDoctor(doctor: IDoctor, deleteModal: TemplateRef<any>): void{
    this.afStorage.storage.refFromURL(doctor.photo).delete();
    this.docService.deleteJSONDoctor(doctor.id).subscribe(() => {
      this.getDoctors();
      this.modalRef.hide();
    })
  }


  //Edit doctor
  openEditDoctor(editModal: TemplateRef<any>, doc: IDoctor): void{
    this.modalRef = this.modalService.show(editModal, { class: 'gray modal-lg' });
    this.speciality = this.specialities.filter(spec => spec.nameEN === doc.speciality.nameEN)[0];
    this.specialityNameEd = this.speciality.nameEN;
    this.clinic = this.clinics.filter(cl => cl.nameEN === doc.clinic.nameEN)[0];
    this.clinicNameEd = this.clinic.nameEN;
    this.district = this.districts.filter( dis => dis.nameEN === doc.district.nameEN)[0];
    this.districtNameEd = this.district.nameEN;
    this.city = this.cities.filter( city => city.nameEN === doc.city.nameEN)[0];
    this.cityNameEd = this.city.nameEN;
    this.docNameUAEd = doc.nameUA;
    this.docLastNameENEd = doc.lastnameEN;
    this.doclastNameUAEd = doc.lastnameUA;
    this.docNameENEd = doc.nameEN;
    this.editDocImage = doc.photo;
    this.officeEd = doc.office;
    this.phoneEd = doc.phoneNumber;
    this.isEdit = true;
    this.docEdit = doc;
  }

  closeEdModal(): void{
    this.modalRef.hide();
    this.editResetForm();
  }
  updateDoctor():void{
    const upDoc = new Doctor (this.docEdit.id, 
      this.docNameENEd.trim(), 
      this.docLastNameENEd.trim(),
      this.docNameUAEd.trim(),
      this.doclastNameUAEd.trim(),
      this.speciality,
      this.clinic,
      this.city,
      this.district,
      this.officeEd.trim(),
      this.phoneEd,
      this.editDocImage);
    this.docService.putJSONDoctor(this.docEdit.id, upDoc).subscribe(() => {
      this.getDoctors();
    });
    this.modalRef.hide();
    this.editResetForm();
  }
  //Edit image
  deleteEdImage(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: 'modal-md'});
  }

  confirmEdImage(): void {
    this.afStorage.storage.refFromURL(this.editDocImage).delete();
    this.modalRef.hide();
    this.isEdit = false;
  }
  declineEdImage(): void {
    this.modalRef.hide();
  }
  
}
