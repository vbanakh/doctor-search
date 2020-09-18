import { Pipe, PipeTransform } from '@angular/core';
import { IAppointment } from '../interfaces/ appointment.interface';

@Pipe({
  name: 'sortDate'
})
export class SortDatePipe implements PipeTransform {

  transform(value: Array<IAppointment>, data: Date): Array<IAppointment> {
    if (!value) {
          return null;
    }
    return value.sort((a: any, b: any) =>
          new Date(b.dateApp).getTime() - new Date(a.dateApp).getTime()
      );
     
    }
}
