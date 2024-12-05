import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { VoluntarioPageRoutingModule } from './voluntario-routing.module';
import { VoluntarioPage } from './voluntario.page';
import { SharedModule } from '../../shared/shared.module'; // Importe o SharedModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoluntarioPageRoutingModule,
    SharedModule, // Certifique-se de importar o SharedModule
  ],
  declarations: [VoluntarioPage],
})
export class VoluntarioPageModule {}
