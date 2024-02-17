import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InputValue } from 'src/InputValue';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  [x: string]: any;

  private baseUrl = 'http://localhost:8080/api/multiply'
  postId: Number;
  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    return this.http.get(`${this.baseUrl}/allData`)
 }

addInputs(value: any): Observable<any> {
  return this.http.post<any>(`${this.baseUrl}/calculate`, value);
}


postData(data: any): Observable<any> {
  return this.http.post(`${this.baseUrl}/calculate`, data);
}

}
