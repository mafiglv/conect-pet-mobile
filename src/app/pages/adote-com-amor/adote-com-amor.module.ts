import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AdoteComAmorPageRoutingModule } from './adote-com-amor-routing.module';
import { AdoteComAmorPage } from './adote-com-amor.page';
import { SharedModule } from 'src/app/shared/shared.module'; // Importa o SharedModule
import { FiltroPetsPipe } from 'src/app/pipes/filtro-pets.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdoteComAmorPageRoutingModule,
    SharedModule // Certifica-se de importar o SharedModule aqui também
  ],
  declarations: [
    AdoteComAmorPage,
    FiltroPetsPipe // Certifica-se de declarar a pipe para filtrar pets
  ]
})
export class AdoteComAmorPageModule {}
