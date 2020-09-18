import { Pipe, PipeTransform } from '@angular/core';
import { ICity } from '../interfaces/city.interface';

@Pipe({
  name: 'searchCity'
})
export class SearchCityPipe implements PipeTransform {

  transform(value: Array<ICity>, searchCity: string): Array<ICity> {
    if (!searchCity) {
      return value;
    }
    if (!value) {
      return null;
    }
    return value.filter(city => city.nameEN.toLowerCase().includes(searchCity.toLowerCase()) || city.nameUA.toLowerCase().includes(searchCity.toLowerCase()))
  }
}
