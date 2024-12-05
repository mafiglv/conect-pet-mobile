import { Pipe, PipeTransform } from '@angular/core';
import { Dog } from '../services/adoption.service'; // Atualizando para usar a interface correta

@Pipe({
  name: 'filtroPets',
})
export class FiltroPetsPipe implements PipeTransform {
  transform(pets: Dog[], searchTerm: string): Dog[] {
    if (!pets || !searchTerm) {
      return pets;
    }
    const lowerSearchTerm = searchTerm.toLowerCase();
    return pets.filter(
      (pet) =>
        pet.name.toLowerCase().includes(lowerSearchTerm) ||
        pet.breed_group?.toLowerCase().includes(lowerSearchTerm) // Usando breed_group no lugar de breed
    );
  }
}
