import { Pipe, PipeTransform } from '@angular/core';
import { IClinic } from '../interfaces/clinic.interface';

@Pipe({
  name: 'searchClinic'
})
export class SearchClinicPipe implements PipeTransform {

  transform(value: Array<IClinic>, search: string): Array<IClinic> {
    if (!search) {
      return value;
    }
    if (!value) {
      return null;
    }
    return value.filter(clinic => clinic.nameEN.toLowerCase().includes(search.toLowerCase()) || clinic.nameUA.toLowerCase().includes(search.toLowerCase()) ||
    clinic.address.toLowerCase().includes(search.toLowerCase()) || clinic.ownership.toLowerCase().includes(search.toLowerCase()))
   
  }

}
