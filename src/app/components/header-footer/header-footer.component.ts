import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-footer',
  templateUrl: './header-footer.component.html',
  styleUrls: ['./header-footer.component.scss'],
})
export class HeaderFooterComponent {
  isHidden: boolean = false;

  constructor(private location: Location, private router: Router) {}

  goBack(): void {
    this.location.back();
  }

  goHome(): void {
    this.router.navigateByUrl('/home'); // Outra maneira de fazer a navegação
  }

  toggleFooterVisibility(hidden: boolean): void {
    this.isHidden = hidden;
  }
}
