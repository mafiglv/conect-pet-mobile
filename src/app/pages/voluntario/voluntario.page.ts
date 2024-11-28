import { Component } from '@angular/core';

@Component({
  selector: 'app-voluntario',
  templateUrl: './voluntario.page.html', // Certifique-se de que este arquivo exista
  styleUrls: ['./voluntario.page.scss'], // Certifique-se de que este arquivo exista
})
export class VoluntarioPage {
  constructor() {}

  openInstagram() {
    window.open('https://www.instagram.com/seu-perfil', '_blank'); // Substitua "seu-perfil" pelo link real
  }

  openWhatsApp() {
    window.open('https://wa.me/seu-numero', '_blank'); // Substitua "seu-numero" pelo número real
  }
}
