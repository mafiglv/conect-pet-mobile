import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  private apiUrl = 'https://api.thedogapi.com/v1/breeds'; 

  constructor(private http: HttpClient) {}

  getPets(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
