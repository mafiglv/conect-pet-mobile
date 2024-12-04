import { Component } from '@angular/core';

@Component({
  selector: 'app-nos-ajude',
  templateUrl: './nos-ajude.page.html',
  styleUrls: ['./nos-ajude.page.scss'],
})
export class NosAjudePage {
  donations = [
    { name: 'Fancy Feast', description: 'Ração para gatos', price: 'R$ 30,00', image: 'assets/images/fancy-feast.png' },
    { name: 'Nulo - Freestyle', description: 'Ração para gatos', price: 'R$ 42,00', image: 'assets/images/nulo-freestyle.png' },
    { name: 'Kibble \'n Bits', description: 'Ração para cães', price: 'R$ 26,00', image: 'assets/images/kibble-n-bits.png' },
    { name: 'Happy Dog', description: 'Ração para cães', price: 'R$ 74,00', image: 'assets/images/happy-dog.png' },
    { name: 'Shampoo', description: 'Higiene para pets', price: 'R$ 18,00', image: 'assets/images/shampoo.png' },
    { name: 'Conta de Luz', description: 'Ajude com a conta', price: 'R$ 100,00', image: 'assets/images/conta-luz.png' },
    { name: 'Fancy Feast', description: 'Ração para gatos', price: 'R$ 30,00', image: 'assets/images/fancy-feast.png' },
    { name: 'Nulo - Freestyle', description: 'Ração para gatos', price: 'R$ 42,00', image: 'assets/images/nulo-freestyle.png' },
    { name: 'Kibble \'n Bits', description: 'Ração para cães', price: 'R$ 26,00', image: 'assets/images/kibble-n-bits.png' },
    { name: 'Happy Dog', description: 'Ração para cães', price: 'R$ 74,00', image: 'assets/images/happy-dog.png' },
    { name: 'Shampoo', description: 'Higiene para pets', price: 'R$ 18,00', image: 'assets/images/shampoo.png' },
    { name: 'Conta de Luz', description: 'Ajude com a conta', price: 'R$ 100,00', image: 'assets/images/conta-luz.png' },
    { name: 'Fancy Feast', description: 'Ração para gatos', price: 'R$ 30,00', image: 'assets/images/fancy-feast.png' },
    { name: 'Nulo - Freestyle', description: 'Ração para gatos', price: 'R$ 42,00', image: 'assets/images/nulo-freestyle.png' },
    { name: 'Kibble \'n Bits', description: 'Ração para cães', price: 'R$ 26,00', image: 'assets/images/kibble-n-bits.png' },
    { name: 'Happy Dog', description: 'Ração para cães', price: 'R$ 74,00', image: 'assets/images/happy-dog.png' },
    { name: 'Shampoo', description: 'Higiene para pets', price: 'R$ 18,00', image: 'assets/images/shampoo.png' },
    { name: 'Conta de Luz', description: 'Ajude com a conta', price: 'R$ 100,00', image: 'assets/images/conta-luz.png' },
  ];

  visibleDonations = 4; // Número inicial de doações visíveis
  showMore = false;

  toggleDonations() {
    if (this.showMore) {
      this.visibleDonations = 4; // Volta ao número inicial
    } else {
      this.visibleDonations = this.donations.length; // Mostra todas as doações
    }
    this.showMore = !this.showMore;
  }
}
