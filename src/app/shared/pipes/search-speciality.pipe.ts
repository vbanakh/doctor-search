import { Pipe, PipeTransform } from '@angular/core';
import { ISpeciality } from '../interfaces/speciality.interface';

@Pipe({
  name: 'searchSpeciality'
})
export class SearchSpecialityPipe implements PipeTransform {

  transform(value: Array<ISpeciality>, search: string): Array<ISpeciality> {
    if (!search) {
      return value;
    }
    if (!value) {
      return null;
    }
    return value.filter(spec => spec.nameEN.toLowerCase().includes(search.toLowerCase()) || spec.nameUA.toLowerCase().includes(search.toLowerCase()))
  }
}
