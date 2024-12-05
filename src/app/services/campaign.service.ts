import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Campaign {
  id: number;
  title: string;
  description: string;
  goal: number;
  raised: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  private readonly API_URL = 'https://mockapi.io/projects/your-project-id/campaigns';

  constructor(private http: HttpClient) {}

  getCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(this.API_URL);
  }
}
