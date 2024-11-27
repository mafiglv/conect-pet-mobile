import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NosAjudePage } from './nos-ajude.page';

const routes: Routes = [
  {
    path: '',
    component: NosAjudePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NosAjudePageRoutingModule {}
