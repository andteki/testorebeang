import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpapiService {

  constructor(private http: HttpClient) { }

  getEmployees() {
    const url = 'https://fakestoreapi.com/products';
    return this.http.get(url);
  }
}
