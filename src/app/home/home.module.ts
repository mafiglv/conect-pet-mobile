import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module'; // Importa o módulo compartilhado

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule // Adicionado para usar HeaderFooterComponent
  ],
  declarations: [HomePage],
  exports: [HomePage] // Exporta para evitar erros de referência circular
})
export class HomePageModule {}
