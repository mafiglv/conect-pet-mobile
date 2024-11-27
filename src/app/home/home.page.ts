import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Aguarde 3 segundos antes de redirecionar para a próxima página
    setTimeout(() => {
      this.router.navigateByUrl('/adote-com-amor'); // Altera para a próxima tela
    }, 3000); // 3000 milissegundos = 3 segundos
  }
}
