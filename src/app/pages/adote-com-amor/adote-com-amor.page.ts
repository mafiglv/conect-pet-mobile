import { Component, OnInit } from '@angular/core';
import { AdoptionService, Dog } from 'src/app/services/adoption.service';

@Component({
  selector: 'app-adote-com-amor',
  templateUrl: './adote-com-amor.page.html',
  styleUrls: ['./adote-com-amor.page.scss'],
})
export class AdoteComAmorPage implements OnInit {
  pets: Dog[] = []; // Lista de pets carregada
  filteredPets: Dog[] = []; // Lista filtrada
  visiblePets = 4; // Número inicial de pets visíveis
  showMore = false;
  searchTerm: string = ''; // Termo de busca

  constructor(private adoptionService: AdoptionService) {}

  ngOnInit(): void {
    this.loadPets();
  }

  // Carrega os pets usando o serviço
  loadPets(): void {
    this.adoptionService.getDogs().subscribe(
      (data: Dog[]) => {
        this.pets = data;
        this.filteredPets = data; // Inicializa lista filtrada
      },
      (error: any) => {
        console.error('Erro ao carregar os pets:', error);
      }
    );
  }

  // Atualiza o filtro de busca
  updateFilter(): void {
    const search = this.searchTerm.toLowerCase();
    this.filteredPets = this.pets.filter(
      (pet) =>
        pet.name.toLowerCase().includes(search) ||
        (pet.breed_group && pet.breed_group.toLowerCase().includes(search))
    );
  }

  // Alterna a exibição de "Mais Pets"
  togglePets(): void {
    this.visiblePets = this.showMore ? 4 : this.filteredPets.length;
    this.showMore = !this.showMore;
  }
}
