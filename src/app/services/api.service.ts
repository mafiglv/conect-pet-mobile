import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.fakepets.com/pets'; // Substitua pela URL real da API

  constructor(private http: HttpClient) {}

  getPets(page: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?page=${page}`); // Suporte à paginação
  }
}
