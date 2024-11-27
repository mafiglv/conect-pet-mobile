import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroPets',
})
export class FiltroPetsPipe implements PipeTransform {
  transform(lista: any[], filtro: string): any[] {
    if (!lista || !filtro) {
      return lista;
    }
    return lista.filter(pet => pet.nome.toLowerCase().includes(filtro.toLowerCase()));
  }
}
