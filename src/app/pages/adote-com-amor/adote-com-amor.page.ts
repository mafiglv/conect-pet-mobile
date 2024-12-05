import { Component, OnInit } from '@angular/core';
import { AdoptionService, Dog } from 'src/app/services/adoption.service';

@Component({
  selector: 'app-adote-com-amor',
  templateUrl: './adote-com-amor.page.html',
  styleUrls: ['./adote-com-amor.page.scss'],
})
export class AdoteComAmorPage implements OnInit {
  pets: Dog[] = []; // Lista de pets carregada
  visiblePets = 4; // Número inicial de pets visíveis
  showMore = false;
  searchTerm: string = ''; // Termo de busca
  isGridView: boolean = true; // Controle para alternar entre lista e grade

  constructor(private adoptionService: AdoptionService) {}

  ngOnInit(): void {
    this.loadPets();
  }

  // Carrega os pets usando o serviço
  loadPets(): void {
    this.adoptionService.getDogs().subscribe(
      (data: Dog[]) => {
        this.pets = data;
      },
      (error: any) => {
        console.error('Erro ao carregar os pets:', error);
      }
    );
  }

  // Alterna a exibição de "Mais Pets"
  togglePets(): void {
    this.visiblePets = this.showMore ? 4 : this.pets.length;
    this.showMore = !this.showMore;
  }
}
