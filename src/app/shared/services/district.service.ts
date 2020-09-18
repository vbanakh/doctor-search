import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDistrict } from '../interfaces/district.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DistrictService {

  private url: string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3000/districts';
  }

  getJSONDistrict(): Observable<Array<IDistrict>>{
    return this.http.get<Array<IDistrict>>(this.url);
  }

  postJSONDistrict(district: IDistrict): Observable<IDistrict>{
    return this.http.post<IDistrict>(this.url, district);
  }

  deleteJSONDistrict(id: number): Observable<IDistrict>{
    return this.http.delete<IDistrict>(`${this.url}/${id}`);
  }
}
