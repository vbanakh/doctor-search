import { Pipe, PipeTransform } from '@angular/core';
import { IDoctor } from '../interfaces/doctor.interfsce';

@Pipe({
  name: 'searchDoctor'
})
export class SearchDoctorPipe implements PipeTransform {

  transform(value: Array<IDoctor>, search: string): Array<IDoctor> {
    if (!search) {
      return value;
    }
    if (!value) {
      return null;
    }
    return value.filter(doc => doc.nameEN.toLowerCase().includes(search.toLowerCase())|| doc.lastnameEN.toLowerCase().includes(search.toLowerCase()) || doc.nameUA.toLowerCase().includes(search.toLowerCase()) ||
    doc.lastnameUA.toLowerCase().includes(search.toLowerCase()) || doc.speciality.nameUA.toLowerCase().includes(search.toLowerCase()) || doc.clinic.nameUA.toLowerCase().includes(search.toLowerCase()) || 
    doc.city.nameUA.toLowerCase().includes(search.toLowerCase()) || doc.district.nameUA.toLowerCase().includes(search.toLowerCase()) ||
    doc.office.toLowerCase().includes(search.toLowerCase()))
  }

}
