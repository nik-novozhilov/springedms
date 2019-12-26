import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Document } from '../models/document';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({ providedIn: 'root' })
export class DocumentService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  public createDocument(document) {
    return this.http.post<Document>(this.baseUrl + 'document', document);
  }

  getDocumentList(): Observable<any> {
    return this.http.get(`${this.baseUrl + 'document'}`, httpOptions);
  }

  public deleteDocument(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl + 'document'}/${id}`, httpOptions);
  }


}
