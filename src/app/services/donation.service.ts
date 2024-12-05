import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Campaign {
  id: number;
  title: string;
  description: string;
  amount: number;
}

@Injectable({
  providedIn: 'root',
})
export class DonationService {
  private apiUrl = 'https://api.example.com/campaigns'; // Substitua pela API real

  constructor(private http: HttpClient) {}

  // Método para buscar campanhas
  getCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.apiUrl).pipe(
      catchError((error) => {
        console.error('Erro ao obter campanhas:', error);
        return of(this.getMockCampaigns()); // Dados mockados
      })
    );
  }

  private getMockCampaigns(): Campaign[] {
    return [
      {
        id: 1,
        title: 'Ajude a salvar cães de rua',
        description: 'Resgate e cuidado para cães abandonados.',
        amount: 5000,
      },
      {
        id: 2,
        title: 'Vacinas para gatos',
        description: 'Campanha para vacinação de gatos resgatados.',
        amount: 3000,
      },
    ];
  }
}
