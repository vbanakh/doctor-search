import { Pipe, PipeTransform } from '@angular/core';
import { IDistrict } from '../interfaces/district.interface';

@Pipe({
  name: 'searchDistrict'
})
export class SearchDistrictPipe implements PipeTransform {

  transform(value: Array<IDistrict>, search: string): Array<IDistrict> {
    if (!search) {
      return value;
    }
    if (!value) {
      return null;
    }
    return value.filter(district => district.nameEN.toLowerCase().includes(search.toLowerCase()) || district.nameUA.toLowerCase().includes(search.toLowerCase()))
  }
}
