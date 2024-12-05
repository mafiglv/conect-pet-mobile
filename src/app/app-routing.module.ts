import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule) },
  { path: 'adote-com-amor', loadChildren: () => import('./pages/adote-com-amor/adote-com-amor.module').then(m => m.AdoteComAmorPageModule) },
  { path: 'nos-ajude', loadChildren: () => import('./pages/nos-ajude/nos-ajude.module').then(m => m.NosAjudePageModule) },
  { path: 'voluntario', loadChildren: () => import('./pages/voluntario/voluntario.module').then(m => m.VoluntarioPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuração de rotas
  exports: [RouterModule], // Exporta para uso em outros módulos
})
export class AppRoutingModule {}
