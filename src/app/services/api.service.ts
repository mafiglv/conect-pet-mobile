import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://fakestoreapi.com/products'; // API de exemplo

  constructor(private http: HttpClient) {}

  // Método GET para buscar produtos
  getProducts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
