import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({ providedIn: 'root' })
export class CompanyService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  public getCompanies(): Observable<any> {
    return this.http.get(`${this.baseUrl + 'company'}`, httpOptions);
  }

}
