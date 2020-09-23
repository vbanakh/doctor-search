import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFeedback } from '../interfaces/feedback.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private url: string;
  constructor(private http: HttpClient) { 
    this.url = 'http://localhost:3000/feedbacks'
  }

  addFeedback(fb: IFeedback ): Observable<IFeedback>{
    return this.http.post<IFeedback>(this.url, fb);
  }

  getFeedback(): Observable<Array<IFeedback>>{
    return this.http.get<Array<IFeedback>>(this.url);
  }

  updateFeedback(fb: IFeedback): Observable<IFeedback>{
    return this.http.put<IFeedback>(`${this.url}/${fb.id}`, fb)
  }
}
