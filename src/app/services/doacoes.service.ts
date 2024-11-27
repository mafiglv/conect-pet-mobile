import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DoacoesService {
  getItensDoacao() {
    return [
      { nome: 'Ração', descricao: 'Para cães e gatos', preco: 'R$ 50' },
      { nome: 'Medicamentos', descricao: 'Suplementos e remédios', preco: 'R$ 30' },
    ];
  }
}
