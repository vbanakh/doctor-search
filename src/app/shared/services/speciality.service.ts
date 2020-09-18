import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISpeciality } from '../interfaces/speciality.interface';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {
  private url: string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3000/specialities';
  }

  getJSONSpeciality(): Observable<Array<ISpeciality>>{
    return this.http.get<Array<ISpeciality>>(this.url);
  }

  postJSONSpeciality(city: ISpeciality): Observable<ISpeciality>{
    return this.http.post<ISpeciality>(this.url, city);
  }

  deleteJSONSpeciality(id: number): Observable<ISpeciality>{
    return this.http.delete<ISpeciality>(`${this.url}/${id}`);
  }
}
