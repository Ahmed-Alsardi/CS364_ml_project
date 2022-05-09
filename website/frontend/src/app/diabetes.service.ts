import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {DiabeteRequest, DiabeteResponse} from './diabetes/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DiabetesService {

  baseUrl = "http://localhost:8000/api/predict/"

  constructor(private http: HttpClient) {
  }

  predict(data: DiabeteRequest): Observable<DiabeteResponse> {
    const httpHeader = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
    return this.http.post<DiabeteResponse>(this.baseUrl, data, {headers: httpHeader});
  }
}
