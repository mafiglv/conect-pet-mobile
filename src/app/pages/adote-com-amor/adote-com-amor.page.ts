import { Component } from '@angular/core';

@Component({
  selector: 'app-adote-com-amor',
  templateUrl: './adote-com-amor.page.html',
  styleUrls: ['./adote-com-amor.page.scss'],
})
export class AdoteComAmorPage {
  pets = [
    { name: 'Whitney', gender: 'fêmea', age: 3, breed: 'British Longhair', image: 'assets/images/witney.png' },
    { name: 'Buggy', gender: 'macho', age: 7, breed: 'Jack Russel Terrier', image: 'assets/images/buggy.png' },
    { name: 'Coxinha', gender: 'macho', age: 6, breed: 'Half Breed', image: 'assets/images/coxinha.png' },
    { name: 'Kiwi', gender: 'macho', age: 4, breed: 'Yorkshire Terrier', image: 'assets/images/kiwi.png' },
    { name: 'Bola de Neve', gender: 'fêmea', age: 5, breed: 'Samoyed', image: 'assets/images/bola-de-neve.png' },
    { name: 'Spike', gender: 'macho', age: 3, breed: 'Mixed Breed', image: 'assets/images/spike.png' },
    { name: 'Gary', gender: 'macho', age: 2, breed: 'Poodle', image: 'assets/images/gary.png' },
    { name: 'Moon', gender: 'fêmea', age: 1, breed: 'Persian Cat', image: 'assets/images/moon.png' },
    { name: 'Bola de Neve', gender: 'fêmea', age: 5, breed: 'Samoyed', image: 'assets/images/bola-de-neve.png' },
    { name: 'Spike', gender: 'macho', age: 3, breed: 'Mixed Breed', image: 'assets/images/spike.png' },
    { name: 'Gary', gender: 'macho', age: 2, breed: 'Poodle', image: 'assets/images/gary.png' },
    { name: 'Moon', gender: 'fêmea', age: 1, breed: 'Persian Cat', image: 'assets/images/moon.png' },
    { name: 'Bola de Neve', gender: 'fêmea', age: 5, breed: 'Samoyed', image: 'assets/images/bola-de-neve.png' },
    { name: 'Spike', gender: 'macho', age: 3, breed: 'Mixed Breed', image: 'assets/images/spike.png' },
    { name: 'Gary', gender: 'macho', age: 2, breed: 'Poodle', image: 'assets/images/gary.png' },
    
  ];

  visiblePets = 4; // Número inicial de pets visíveis
  showMore = false;

  togglePets() {
    if (this.showMore) {
      this.visiblePets = 4; // Volta para o número inicial
    } else {
      this.visiblePets = this.pets.length; // Mostra todos os pets
    }
    this.showMore = !this.showMore;
  }
}
