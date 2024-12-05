import { Component } from '@angular/core';

@Component({
  selector: 'app-voluntario',
  templateUrl: './voluntario.page.html',
  styleUrls: ['./voluntario.page.scss'],
})
export class VoluntarioPage {
  constructor() {}

  openInstagram() {
    window.open('https://www.instagram.com/seu-perfil', '_blank'); // Substitua pelo link real do Instagram
  }

  openWhatsApp() {
    window.open('https://wa.me/seu-numero', '_blank'); // Substitua pelo número real do WhatsApp
  }
}
