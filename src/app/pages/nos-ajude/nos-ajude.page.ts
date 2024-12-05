import { Component, OnInit } from '@angular/core';

interface Donation {
  name: string;
  description: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-nos-ajude',
  templateUrl: './nos-ajude.page.html',
  styleUrls: ['./nos-ajude.page.scss'],
})
export class NosAjudePage implements OnInit {
  donations: Donation[] = [
    { name: 'Fancy Feast', description: 'Ração para gatos', price: 'R$ 30,00', image: 'assets/images/fancy-feast.png' },
    { name: 'Nulo - Freestyle', description: 'Ração para gatos', price: 'R$ 42,00', image: 'assets/images/nulo-freestyle.png' },
    { name: "Kibble 'n Bits", description: 'Ração para cães', price: 'R$ 26,00', image: 'assets/images/kibble-n-bits.png' },
    { name: 'Happy Dog', description: 'Ração para cães', price: 'R$ 74,00', image: 'assets/images/happy-dog.png' },
    { name: 'Shampoo', description: 'Higiene para pets', price: 'R$ 18,00', image: 'assets/images/shampoo.png' },
    { name: 'Conta de Luz', description: 'Ajude com a conta', price: 'R$ 100,00', image: 'assets/images/conta-luz.png' },
  ];

  visibleDonations = 4; // Número inicial de doações visíveis
  showMore = false;

  campaigns = [
    {
      title: 'Campanha de Vacinação',
      description: 'Ajude a vacinar 50 cães e gatos da comunidade.',
      goal: '5000',
      raised: '3000',
      image: 'assets/images/vacinacao.png',
    },
    {
      title: 'Ajuda para Castração',
      description: 'Levamos castração gratuita para famílias carentes.',
      goal: '8000',
      raised: '5000',
      image: 'assets/images/castracao.png',
    },
  ];

  constructor() {}

  ngOnInit() {}

  toggleDonations() {
    if (this.showMore) {
      this.visibleDonations = 4; // Volta ao número inicial
    } else {
      this.visibleDonations = this.donations.length; // Mostra todas as doações
    }
    this.showMore = !this.showMore;
  }
}
