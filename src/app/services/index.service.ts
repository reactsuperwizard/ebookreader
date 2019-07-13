import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/* service for loading index content from json */
export class IndexService {

  constructor(private http: HttpClient) {

  }

  getIndexData() {
    return this.http.get('/assets/doc/index.json');
  }
}
