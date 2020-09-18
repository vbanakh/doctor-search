import { Injectable } from '@angular/core';
import { IAppointment } from '../interfaces/ appointment.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private url: string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3000/appointments'
  }

  addAppointment(appointment: IAppointment ): Observable<IAppointment>{
    return this.http.post<IAppointment>(this.url, appointment);
  }

  getAppointment(): Observable<Array<IAppointment>>{
    return this.http.get<Array<IAppointment>>(this.url);
  }

  updateAppointment(appointment: IAppointment): Observable<IAppointment>{
    return this.http.put<IAppointment>(`${this.url}/${appointment.id}`, appointment)
  }
 
  getAppUser(email: string): Observable<Array<IAppointment>> {
    return this.http.get<Array<IAppointment>>(`${this.url}?email=${email}`)
  }
}
