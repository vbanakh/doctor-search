import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClinic } from '../interfaces/clinic.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  private url: string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3000/clinics';
  }

  getJSONClinic(): Observable<Array<IClinic>>{
    return this.http.get<Array<IClinic>>(this.url);
  }

  postJSONClinic(city: IClinic): Observable<IClinic>{
    return this.http.post<IClinic>(this.url, city);
  }

  deleteJSONClinic(id: number): Observable<IClinic>{
    return this.http.delete<IClinic>(`${this.url}/${id}`);
  }

  getJSONClinicFilter(search: string): Observable<Array<IClinic>>{
    return this.http.get<Array<IClinic>>(`${this.url}?ownership=${search}`);
  }
}
