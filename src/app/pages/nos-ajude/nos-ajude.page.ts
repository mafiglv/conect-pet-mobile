import { Component } from '@angular/core';

@Component({
  selector: 'app-nos-ajude',
  templateUrl: './nos-ajude.page.html',
  styleUrls: ['./nos-ajude.page.scss'],
})
export class NosAjudePage {
  showMore = false;

  // Lista de doações adicionais
  moreDonations = [
    { image: 'assets/images/cobertores.png', title: 'Cobertores', description: 'Cobertores para aquecer', price: 'R$20,00' },
    { image: 'assets/images/casinhas.png', title: 'Casinhas', description: 'Abrigos para animais', price: 'R$150,00 - R$300,00' },
    { image: 'assets/images/brinquedos.png', title: 'Brinquedos', description: 'Brinquedos para cães e gatos', price: 'R$10,00 - R$50,00' },
  ];

  // Função para alternar entre mostrar mais ou menos
  toggleDonations() {
    this.showMore = !this.showMore;
  }
}
