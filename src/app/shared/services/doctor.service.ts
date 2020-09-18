import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDoctor } from '../interfaces/doctor.interfsce';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private url: string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3000/doctors';
  }

  getJSONDoctor(): Observable<Array<IDoctor>>{
    return this.http.get<Array<IDoctor>>(this.url);
  }

  postJSONDoctor(doc: IDoctor): Observable<IDoctor>{
    return this.http.post<IDoctor>(this.url, doc);
  }

  deleteJSONDoctor(id: number): Observable<IDoctor>{
    return this.http.delete<IDoctor>(`${this.url}/${id}`);
  }

  putJSONDoctor(id: number, doctor: IDoctor): Observable<IDoctor>{
    return this.http.put<IDoctor>(`${this.url}/${id}`, doctor);
  }

  getOneDoctor(id: number): Observable<IDoctor> {
    return this.http.get<IDoctor>(`${this.url}/${id}`);  
  }

 

  getClinicDoctor(id: number): Observable<Array<IDoctor>> {
    return this.http.get<Array<IDoctor>>(`${this.url}?clinic.id=${id}`);
  }

  getJSONDoctorSearch(param: string, search: string): Observable<Array<IDoctor>>{
    return this.http.get<Array<IDoctor>>(`${this.url}?${param}=${search}`);
  }

  // getDoc(search: string): Observable<Array<IDoctor>>{
  //   return this.http.get<Array<IDoctor>>(`${this.url}?q=${search}`);
  // }

}
