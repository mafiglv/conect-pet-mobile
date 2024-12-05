import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Dog {
  id: string;
  name: string;
  breed_group?: string;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class AdoptionService {
  private apiUrl = 'https://api.thedogapi.com/v1/breeds';
  private apiKey = 'live_7rkeL6WeBz9izuZu8LpWgprwp51xRTAs8vlsfdoR1k7eOHFuwceNHqZOHNZQ0fc9';

  constructor(private http: HttpClient) {}

  // Obtém a lista de cachorros da API
  getDogs(): Observable<Dog[]> {
    const headers = new HttpHeaders().set('x-api-key', this.apiKey);
    return this.http.get<any[]>(this.apiUrl, { headers }).pipe(
      map((dogs) =>
        dogs.map((dog) => ({
          id: dog.id,
          name: dog.name,
          breed_group: dog.breed_group || 'Raça não especificada',
          image: dog.image?.url || 'assets/images/default-dog.png',
          description: dog.temperament || 'Este é um pet adorável que está esperando por uma nova casa cheia de amor.' // Usando o "temperament" da API como descrição ou uma descrição genérica
        }))
      )
    );
  }
}
