import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoluntarioPage } from './voluntario.page'; // Nome correto

const routes: Routes = [
  {
    path: '',
    component: VoluntarioPage, // Nome ajustado para a classe correta
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VoluntarioPageRoutingModule {}
