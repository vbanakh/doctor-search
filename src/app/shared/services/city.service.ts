import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICity } from '../interfaces/city.interface';

@Injectable({
  providedIn: 'root'
})
export class CityService {
private url: string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3000/cities';
  }

  getJSONCity(): Observable<Array<ICity>>{
    return this.http.get<Array<ICity>>(this.url);
  }

  postJSONCity(city: ICity): Observable<ICity>{
    return this.http.post<ICity>(this.url, city);
  }

  deleteJSONCity(id: number): Observable<ICity>{
    return this.http.delete<ICity>(`${this.url}/${id}`);
  }
}
