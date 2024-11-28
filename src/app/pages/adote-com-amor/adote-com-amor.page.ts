import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-adote-com-amor',
  templateUrl: './adote-com-amor.page.html',
  styleUrls: ['./adote-com-amor.page.scss'],
})
export class AdoteComAmorPage implements OnInit {
  pets: any[] = []; // Lista de pets
  page: number = 1; // Controle de paginação

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadPets();
  }

  loadPets() {
    this.apiService.getPets(this.page).subscribe(
      (data: any) => {
        this.pets = [...this.pets, ...data]; // Adiciona novos pets à lista
      },
      (error: any) => {
        console.error('Erro ao carregar pets:', error);
      }
    );
  }

  loadMorePets() {
    this.page++;
    this.loadPets();
  }
}
