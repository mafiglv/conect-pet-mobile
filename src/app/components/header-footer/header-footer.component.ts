import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.scss'],
})
export class HeaderFooterComponent {
  isHidden: boolean = false; // Controle de visibilidade do rodapé

  constructor(private location: Location, private router: Router) {}

  // Método para voltar à página anterior
  goBack(): void {
    this.location.back(); // Volta para a página anterior no histórico
  }

  // Método para navegar para a página inicial
  goHome(): void {
    this.router.navigate(['/home']); // Navega diretamente para a página inicial
  }

  // Método para ocultar ou exibir o rodapé
  toggleFooterVisibility(hidden: boolean): void {
    this.isHidden = hidden;
  }
}
