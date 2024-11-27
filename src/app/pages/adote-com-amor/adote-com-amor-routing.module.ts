import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdoteComAmorPage } from './adote-com-amor.page';

const routes: Routes = [
  {
    path: '',
    component: AdoteComAmorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdoteComAmorPageRoutingModule {}
